import React, { useState } from "react"
import SelectInput from "../components/SelectInput"

const options = [
    { label: "First", value: 1 },
    { label: "Second", value: 2 },
    { label: "Third", value: 3 },
    { label: "Fourth", value: 4 },
    { label: "Fifth", value: 5 },
]

interface Select {
    label: string
    value: number | string
}

const Select = () => {
    const [value1, setValue1] = useState<Select[]>([options[0]])
    const [value2, setValue2] = useState<Select>(options[0])
    return (
        <main className="flex flex-col gap-y-6 md:px-40">
            <SelectInput
                multiple
                options={options}
                value={value1}
                onChange={(o) => setValue1(o)}
            />

            <SelectInput
                options={options}
                value={value2}
                onChange={(o) => setValue2(o)}
            />
        </main>
    )
}

export default Select
