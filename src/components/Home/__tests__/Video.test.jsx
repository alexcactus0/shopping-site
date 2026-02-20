import { describe, it, expect, afterEach } from "vitest";
import { render, screen } from "@testing-library/react";
import { vi } from "vitest";
import Video from "../Video";

describe("Tests Pexels API call", () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("shows loading first", () => {
    vi.spyOn(global, "fetch").mockImplementation(() => new Promise(() => {}));
    render(<Video />);

    expect(screen.getByText("Loading video...")).toMatchSnapshot();
  });

  it("renders video after fetch", async () => {
    vi.spyOn(global, "fetch").mockResolvedValue({
      json: async () => ({
        video_files: [{ link: "https://test-video-link.com/video.mp4" }],
      }),
    });

    const { container, findByTestId } = render(<Video />);

    await findByTestId("video-element");

    expect(container).toMatchSnapshot();
  });
});
