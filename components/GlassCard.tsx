type GlassCardProps = {
  children: React.ReactNode;
};


export default function GlassCard({
  children,
}: GlassCardProps) {

  return (

    <div
      className="
      border
      border-white/10
      bg-white/5
      backdrop-blur-xl
      rounded-2xl
      p-6
      "
    >

      {children}

    </div>

  );

}