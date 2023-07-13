
export default function ButtonPrimary(props: { label: string }) {
    return (
        <button className="bg-primary hover:bg-primary-light text-white font-semibold block mx-auto py-2 px-6 rounded-full" type="submit">
            {props.label}
        </button>
    )
}