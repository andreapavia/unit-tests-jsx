import React from "react";
import { render, screen } from "@testing-library/react";
import Hello from "../Hello";
import { ProfileImageFromImageTag, ProfileImageFromSource } from "../ProfileImageComponents";
import AvatarComponent from "../AvatarComponent";
import LearnReactComponent from "../LearnReactComponent";

describe("JSX Practice exercises", () => {
  describe("JSX basics", () => {
    /**
     * Implement the `HelloWorld` component
     * such that it says "Hello, John Doe!"
     *
     * Read the value from the `name` variable
     */
    test("hello john doe", () => {
      const name = "John Doe";

      const HelloWorld = () => <Hello name={name}/>;

      render(<HelloWorld />);
      expect(screen.getByText(/Hello, John Doe/)).toBeInTheDocument();
    });

    /**
     * Implement the `ProfileImage` component such that
     * it renders an image
     *
     * Read the image path from the `imagePath` variable
     */
    test("profile image 1", () => {
      const imagePath = "https://placekitten.com/200/300";

      const ProfileImage = () => <ProfileImageFromSource imagePath={imagePath} />;

      render(<ProfileImage />);
      expect(screen.getByRole("img")).toHaveAttribute("src", imagePath);
    });

    /**
     * Implement the `ProfileImage` component
     * such that it renders the given HTML
     */
    test("profile image 2", () => {
      const html = `<img src="https://placekitten.com/200/300" style="border: 1px solid blue;" />`;

      const ProfileImage = () => <ProfileImageFromImageTag html={html}/>;

      render(<ProfileImage />);
      expect(screen.getByRole("img")).toHaveAttribute(
        "style",
        "border: 1px solid blue;"
      );
    });

    /**
     * Implement the `Avatar` component such that
     * it displays the name and image of a character.
     *
     * Read the details from the `character` variable.
     * Display the name inside a heading HTML tag.
     */
    test("avatar", () => {
      const character = {
        name: "John Doe",
        image: "https://placekitten.com/200/300",
      };

      const Avatar = () => <AvatarComponent name={character.name} image={character.image} />;

      render(<Avatar />);
      expect(screen.getByRole("heading")).toHaveTextContent(character.name);
      expect(screen.getByRole("img")).toHaveAccessibleName(character.name);
      expect(screen.getByRole("img")).toHaveAttribute("src", character.image);
    });
  });

  describe("JSX expressions", () => {
    /**
     * Update the `ProductPrice` component
     * such that the value of the price is displayed
     * with two decimals
     */
    test("format number", () => {
      const price = 12;

      const ProductPrice = () => {
        return <p>Price: {price.toFixed(2)}</p>;
      };

      render(<ProductPrice />);
      expect(screen.getByText(/Price: 12.00/)).toBeInTheDocument();
    });

    /**
     * Update the `HelloReact` component
     * so that it outputs "React was launched on a Wednesday"
     *
     * Tip: You can use the `Intl.DateTimeFormat` helper,
     * passing in just the `weekday` option
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat#using_options
     */
    test("format date - day of week", () => {
      // Date react was launched: May 29, 2013
      const reactLaunchDate = new Date("2013-05-29");

      const HelloWorld = () => {
        const formattedDate = new Intl.DateTimeFormat("en-GB", {weekday: "long"}).format(reactLaunchDate)
        
        return <p>React was launched on a {formattedDate}</p>;
      };

      render(<HelloWorld />);
      expect(
        screen.getByText(/React was launched on a Wednesday/)
      ).toBeInTheDocument();
    });
  });

  describe("HTML to JSX", () => {
    /**
     * Implement the `LearnReactSection` component
     * such that it returns the given HTML
     */
    test("learn react section", () => {
      const html = `
          <div>
              <h1>Learn React</h1>
              <ul>
                  <li>Describing the UI
                  <li>Adding interactivity
                  <li>Managing state
              </ul>
          </div>
  `;

      const LearnReactSection = () => <LearnReactComponent html={html} />;

      render(<LearnReactSection />);
      expect(screen.getByRole("heading")).toHaveTextContent(/Learn React/);
      expect(screen.getByRole("list")).toHaveTextContent(
        "Describing the UI Adding interactivity Managing state"
      );
    });

    /**
     * Implement the `Profile` component
     * such that it returns the given HTML
     */
    test("john doe profile 1", () => {
      const html = `
      <div>
          <h1>John Doe</h1>
          <img src="https://placekitten.com/200/300">
      </div>
  `;

      const Profile = () => <LearnReactComponent html={html} />;

      render(<Profile />);
      expect(screen.getByRole("heading")).toHaveTextContent(/John Doe/);
      expect(screen.getByRole("img")).toBeInTheDocument();
    });

    /**
     * Implement the `Profile` component
     * such that it returns the given HTML
     */
    test("john doe profile 2", () => {
      const html = `
          <h1>John Doe</h1>
          <img src="https://placekitten.com/200/300"/>
      `;
      const Profile = () => <LearnReactComponent html={html} />;

      render(<Profile />);
      expect(screen.getByRole("heading")).toHaveTextContent(/John Doe/);
      expect(screen.getByRole("img")).toBeInTheDocument();
    });

    /**
     * Implement the `ProfileImage` component
     * such that it returns the given HTML
     */
    test("profile image 1", () => {
      const html = `<img src="https://placekitten.com/200/300" class="photo" />`;

      const ProfileImage = () => <LearnReactComponent html={html} />;

      render(<ProfileImage />);
      expect(screen.getByRole("img")).toHaveAttribute("class", "photo");
    });

    /**
     * Implement the `CustomerCard` component
     * such that it returns the given HTML
     */
    test("customer card", () => {
      const html = `<section data-testid="blueberry"><h1>BlueBerry INC</h1></section>`;

      const CustomerCard = () => <LearnReactComponent html={html} />;

      render(<CustomerCard />);
      expect(screen.getByTestId("blueberry")).toBeInTheDocument();
    });

    /**
     * Implement the `ProfileImage` component
     * such that it returns the given HTML
     */
    test("profile image 2", () => {
      const html = `<img src="https://placekitten.com/200/300" style="border-color: red;" />`;

      const ProfileImage = () => <LearnReactComponent html={html} />;

      render(<ProfileImage />);
      expect(screen.getByRole("img")).toHaveAttribute(
        "style",
        "border-color: red;"
      );
    });
  });
});
