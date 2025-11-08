'use client';

import Image from 'next/image';

const GuidePage = () => {
  return (
    <div className="min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl lg:text-5xl font-bold text-white text-center mb-4">Sign Language Guide</h1>
        <p className="text-slate-300 text-lg leading-relaxed text-center max-w-3xl mx-auto mb-10">
          Sign language is a complete, visual language used by Deaf, hard-of-hearing, and non‑verbal people
          to communicate clearly and confidently. This guide focuses on simple, practical tips so beginners can
          start learning and supporting inclusive communication.
        </p>

		{/* Center image */}
        <div className="flex justify-center mb-12">
          <div className="rounded-2xl overflow-hidden shadow-xl ring-1 ring-white/10 bg-white/5">
				<Image src="/actions.png" alt="Illustration of common hand actions used in sign language" width={1200} height={800} className="w-full h-auto object-contain" priority />
          </div>
        </div>

        {/* Helpful, beginner‑friendly content */}
        <div className="grid grid-cols-1 gap-6">
          <section className="glass rounded-2xl p-6 bg-white/5 ring-1 ring-white/10">
            <h2 className="text-2xl font-semibold text-white mb-3">Why Sign Language Matters</h2>
            <p className="text-slate-300 leading-relaxed">
              Sign language enables natural, fast, and expressive communication without sound. It supports Deaf and
              hard‑of‑hearing people at home, school, and work, and offers a respectful way for non‑verbal speakers to
              express needs, feelings, and ideas.
            </p>
          </section>

          <section className="glass rounded-2xl p-6 bg-white/5 ring-1 ring-white/10">
            <h2 className="text-2xl font-semibold text-white mb-3">Beginner Tips</h2>
            <ul className="text-slate-300 leading-relaxed list-disc pl-5 space-y-2">
              <li><span className="text-white">Go slow:</span> keep hands steady and movements clear.</li>
              <li><span className="text-white">Use your face:</span> expressions add meaning and tone.</li>
              <li><span className="text-white">Stay in frame:</span> keep hands and face visible to the camera/viewer.</li>
              <li><span className="text-white">Practice repetition:</span> repeat new signs several times, rest, then try again.</li>
              <li><span className="text-white">Learn the alphabet first:</span> fingerspelling helps with names and new words.</li>
            </ul>
          </section>

          <section className="glass rounded-2xl p-6 bg-white/5 ring-1 ring-white/10">
            <h2 className="text-2xl font-semibold text-white mb-3">Inclusive Communication</h2>
            <p className="text-slate-300 leading-relaxed">
              When speaking with a signer, face them, keep lighting good, and avoid covering your mouth or hands.
              If you do not know a sign, fingerspell the word or use simple gestures. Respect regional differences and
              be patient—clarity is more important than speed.
            </p>
          </section>

          <section className="glass rounded-2xl p-6 bg-white/5 ring-1 ring-white/10">
            <h2 className="text-2xl font-semibold text-white mb-3">Practice Ideas</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="rounded-xl p-4 bg-white/5 ring-1 ring-white/10">
                <div className="text-white font-medium mb-1">Daily words</div>
                <p className="text-slate-300 text-sm">Practice 3–5 everyday signs (hello, thank you, water).</p>
              </div>
              <div className="rounded-xl p-4 bg-white/5 ring-1 ring-white/10">
                <div className="text-white font-medium mb-1">Mirror practice</div>
                <p className="text-slate-300 text-sm">Use a mirror to check hand shape, position, and clarity.</p>
                </div>
              <div className="rounded-xl p-4 bg-white/5 ring-1 ring-white/10">
                <div className="text-white font-medium mb-1">Short phrases</div>
                <p className="text-slate-300 text-sm">Combine two signs into phrases like “thank you” and “see you”.</p>
                </div>
          </div>
          </section>

			{/* Fingerspelling (Alphabet) - bottom centered */}
			<section className="rounded-2xl p-6">
				<h2 className="text-2xl font-semibold text-white text-center mb-4">Fingerspelling Alphabet</h2>
				<p className="text-slate-300 leading-relaxed text-center max-w-2xl mx-auto mb-6">
					Fingerspelling lets you spell names and words that you don’t know a sign for. Learn a few
					letters at a time, keep your hand steady near your shoulder, and face your palm slightly
					toward the viewer.
				</p>
				<div className="flex justify-center mb-4">
					<div className="rounded-2xl overflow-hidden shadow-xl ring-1 ring-white/10 bg-white/5 max-w-3xl w-full">
						<Image src="/alpha sign.webp" alt="Fingerspelling alphabet reference chart" width={1600} height={900} className="w-full h-auto object-contain" priority />
                </div>
                </div>
				<ul className="text-slate-300 leading-relaxed list-disc pl-5 max-w-3xl mx-auto space-y-2">
					<li><span className="text-white">Hand shape first:</span> match the picture, then add small movement if needed.</li>
					<li><span className="text-white">Clear spacing:</span> pause slightly between letters to separate words.</li>
					<li><span className="text-white">Comfort posture:</span> keep elbows relaxed; avoid strain for longer sessions.</li>
				</ul>
				<p className="text-slate-300 leading-relaxed text-center max-w-2xl mx-auto mt-6">
					When fingerspelling, hold your hand at shoulder height and keep a steady rhythm. If a letter
					is unclear, repeat it slowly rather than speeding up. Aim for smooth, small movements.
				</p>
			</section>

			{/* Numbers (1–10) - bottom centered */}
			<section className="rounded-2xl p-6">
				<h2 className="text-2xl font-semibold text-white text-center mb-4">Numbers (1–10)</h2>
				<p className="text-slate-300 leading-relaxed text-center max-w-2xl mx-auto mb-6">
					Number signs are compact and clear. Keep your palm steady and avoid exaggerated motion. Practice
					1–10 first, then combine into ages, times, counts, and phone numbers.
				</p>
				<div className="flex justify-center mb-4">
					<div className="rounded-2xl overflow-hidden shadow-xl ring-1 ring-white/10 bg-white/5 max-w-3xl w-full">
						<Image src="/gettyimages-1637254722-612x612.jpg" alt="Number signs 0 to 9 reference chart" width={1200} height={800} className="w-full h-auto object-contain" priority />
					</div>
				</div>
				<ul className="text-slate-300 leading-relaxed list-disc pl-5 max-w-3xl mx-auto space-y-2">
					<li><span className="text-white">One hand, clear shapes:</span> form each number cleanly with stable fingers.</li>
					<li><span className="text-white">Consistent palm:</span> keep the same orientation unless your local style differs.</li>
					<li><span className="text-white">Practice pairs:</span> sign 1–5, then 6–10 to build accuracy and rhythm.</li>
				</ul>
				<p className="text-slate-300 leading-relaxed text-center max-w-2xl mx-auto mt-6">
					If a number is unclear, repeat slowly with smaller movement. Keep your hand at shoulder height and
					face your palm slightly toward the viewer for readability.
				</p>
			</section>
          </div>
      </div>
    </div>
  );
};

export default GuidePage;
