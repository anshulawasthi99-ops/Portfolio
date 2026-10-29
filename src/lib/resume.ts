import fs from "node:fs";
import path from "node:path";
import { site } from "@/content/site";

/** True only if the resume PDF really exists in /public, so we never show a dead download link. */
export const resumeAvailable = fs.existsSync(path.join(process.cwd(), "public", site.resume.file));
