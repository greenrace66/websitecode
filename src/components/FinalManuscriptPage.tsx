import { ArrowLeft, Download, FileText } from 'lucide-react';
import manuscriptPdf from '/src/finalmanuscript.pdf';

const FinalManuscriptPage = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <header className="border-b border-white/10 bg-slate-950/95 backdrop-blur">
        <div className="container mx-auto flex flex-col gap-4 px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white">
              <FileText className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/60">Final manuscript</p>
              <h1 className="text-xl font-semibold sm:text-2xl">Read the manuscript online</h1>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="/"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to site
            </a>
            <a
              href={manuscriptPdf}
              download
              className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-slate-200"
            >
              <Download className="h-4 w-4" />
              Download PDF
            </a>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-4 sm:px-6 lg:py-6">
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-slate-900 shadow-2xl shadow-black/30">
          <div className="h-[calc(100vh-9.5rem)] min-h-[32rem] w-full bg-slate-950">
            <iframe
              src={`${manuscriptPdf}#view=FitH`}
              className="h-full w-full border-0"
              title="Final manuscript"
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default FinalManuscriptPage;
