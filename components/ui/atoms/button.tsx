import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
/**
 * Button component using Class Variance Authority (CVA)
 * Replaces all button type instances with a consistent design system.
 */
const buttonVariants = cva("", {
    variants: {
        variant: {
            primary: "bg-neutral-800 hover:bg-neutral-600 text-white font-bold py-2 px-4 rounded-full",
            outline: "bg-transparent border border-neutral-400 hover:bg-neutral-400 text-neutral-400 hover:text-white font-bold py-2 px-4 rounded-full",
        }
    }
});

const Button = (props: any) => {
    const { className, children, variant, ...rest } = props;
    return (
        <button
            {...rest}
            className={cn(buttonVariants({ variant: variant }), className)}
        >
            {children}
        </button>
    )
}

export default Button;