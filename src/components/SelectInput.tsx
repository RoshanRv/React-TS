import React, { useEffect, useRef, useState } from "react"
import { GrClose } from "react-icons/gr"

interface Select {
    label: string
    value: number | string
}

interface SingleInput {
    multiple?: false
    value: Select
    onChange: (value: Select) => void
}

interface MultipleInput {
    multiple: true
    value: Select[]
    onChange: (value: Select[]) => void
}

type SelectInputProps = {
    options: Select[]
} & (SingleInput | MultipleInput)

const SelectInput = ({
    multiple,
    options,
    value,
    onChange,
}: SelectInputProps) => {
    const [isOpen, setIsOpen] = useState(false)
    const [highlightedText, setHighlightedText] = useState(0)
    const containerRef = useRef<HTMLDivElement>(null)

    const selectOpt = (val: Select) => {
        if (multiple) {
            if (value.includes(val)) {
                onChange(value.filter((v) => v !== val))
            } else {
                onChange([...value, val])
            }
        } else {
            if (value !== val) onChange(val)
        }
    }

    const isSelected = (opt: Select) => {
        return multiple ? value.includes(opt) : value == opt
    }

    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            if (e.target !== containerRef.current) return

            switch (e.code) {
                case "Enter":
                case "Space": {
                    setIsOpen((prev) => !prev)
                    if (isOpen) {
                        selectOpt(options[highlightedText])
                    }
                    break
                }
                case "ArrowUp":
                case "ArrowDown": {
                    if (!isOpen) {
                        setIsOpen(true)
                        break
                    }

                    const newVal =
                        highlightedText + (e.code === "ArrowUp" ? -1 : 1)
                    console.log(newVal)

                    if (newVal >= 0 && newVal < options.length) {
                        setHighlightedText(newVal)
                    }
                    break
                }
                case "Escape":
                    setIsOpen(false)
                    break
            }
        }

        containerRef.current?.addEventListener("keydown", handler)

        return () =>
            containerRef.current?.removeEventListener("keydown", handler)
    }, [])

    return (
        <div
            onBlur={() => setIsOpen(false)}
            onClick={() => setIsOpen((pre) => !pre)}
            className=""
            ref={containerRef}
        >
            {/*       input....   */}
            <div className="p-2 rounded-md border-2 border-orange-300 flex gap-x-4">
                {multiple ? (
                    value.map((val) => (
                        <button
                            key={val.value}
                            onClick={(e) => {
                                selectOpt(val)
                                e.stopPropagation()
                            }}
                            className="bg-orange-500 p-2 rounded-md text-white flex  items-center gap-x-2"
                        >
                            {val.label}
                            <GrClose className="text-sm text-white" />
                        </button>
                    ))
                ) : (
                    <h1>{value.label}</h1>
                )}
            </div>

            {/* dropdown */}
            <div
                className={`${
                    isOpen ? "scale-100" : "scale-0 hidden"
                } transition-all origin-top p-2 flex flex-col gap-y-2 border-2 border-orange-300 mt-4`}
            >
                {options.map((opt, i) => (
                    <button
                        key={opt.value}
                        onClick={() => selectOpt(opt)}
                        onMouseEnter={() => setHighlightedText(i)}
                        className={` transition-all rounded-lg p-1 ${
                            isSelected(opt) ? "bg-orange-300" : "bg-white"
                        } ${highlightedText == i ? "bg-black/30" : ""} `}
                    >
                        {opt.label}
                    </button>
                ))}
            </div>
        </div>
    )
}

export default SelectInput
