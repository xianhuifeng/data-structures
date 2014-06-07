describe('set', function() {
  var set;

  beforeEach(function() {
    set = makeSet();
  });

  it('should have methods named "add", "contains", and "remove"', function() {
    expect(set.add).to.be.a("function");
    expect(set.contains).to.be.a("function");
    expect(set.remove).to.be.a("function");
  });

  it('should add numbers to a set', function(){
    set.add("Susan Sarandon");
    set.add("1");
    expect(set.contains('1')).to.equal(true);
    expect(set.contains('Susan Sarandon')).to.equal(true);
  });

  it('should remove numbers from a set', function(){
    set.add("4");
    set.remove("4");
    expect(set.contains("4")).to.equal(false);
  });

});
