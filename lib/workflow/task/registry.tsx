import { LaunchBrowserTask } from "@/lib/workflow/task/LaunchBrowser";
import { PageToHtmlTask } from "@/lib/workflow/task/PageToHtml";
import { ExtractTextFromElementTask } from "@/lib/workflow/task/ExtractTextFromElement";
import { TaskType } from "@/types/task";
import { WorkFlowTask } from "@/types/workflow";

type Registry = {
  [K in TaskType]: WorkFlowTask & {type: K};
}

export const TaskRegistry: Registry = {
  LAUNCH_BROWSER: LaunchBrowserTask,
  PAGE_TO_HTML: PageToHtmlTask,
  EXTRACT_TEXT_FROM_ELEMENT: ExtractTextFromElementTask,
};
  