const Footer = () => {
  return (
    <footer className="border-t border-border py-8 mt-16">
      <div className="max-w-3xl mx-auto px-6 text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} Dr. Jane Smith. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
