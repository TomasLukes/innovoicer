
export default function InputText(props: { label: string }) {
    return (
        <label htmlFor="" className="flex flex-col mb-4 text-neutral-500">
            {props.label}
            <input type="text" className="text-black"/>
        </label>
    )
}