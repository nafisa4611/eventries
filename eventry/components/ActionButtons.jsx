"use client";
import { useState } from "react";
import { useAuth } from "@/app/hooks/useAuth";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { addInterestedEvent } from "@/app/actions";

const ActionButtons = ({ eventId, interestedUserIds, goingUserIds, fromDetails }) => {
    const { auth } = useAuth();
    const router = useRouter();
    const isInterested = interestedUserIds?.find((id) => id === auth?.id);
    const isGoing = goingUserIds?.find(id => id === auth?.id);
    const [interested, setInterested] = useState(isInterested);
    const [going, setGoing] = useState(isGoing);
    const [isPending, startTransition] = useTransition();

    const toggleInterest = async () => {
        if (auth) {
            await addInterestedEvent(eventId, auth?.id); // ✅ await
            setInterested(!interested);
        } else {
            router.push("/login");
        }
    };


    const markGoing = () => {
        if (auth) {
            router.push(`/payment/${eventId}`);
        } else {
            router.push("/login");
        }
    };

    return (
        <div className={`w-full flex gap-4 mt-4 ${fromDetails && "flex-1"}`}>
            <button
                onClick={() =>
                    startTransition(() => {
                        toggleInterest();
                    })
                }
                className={`base-button w-full text-white ${interested ? "bg-indigo-600 hover:bg-indigo-900" : ""
                    }`}

            >
                Interested
            </button>
            <button
                disabled={auth && going}
                onClick={markGoing}
                className={`text-center base-button w-full py-2 px-2 rounded-md border shadow-sm cursor-pointer transition-colors active:translate-y-1
    ${going ? "bg-green-600 hover:bg-green-700 text-white" : "bg-[#464849] hover:bg-[#3C3D3D] text-white"}`}
            >
                {going ? "Going ✔" : "Going"}
            </button>

        </div>
    );
};

export default ActionButtons;