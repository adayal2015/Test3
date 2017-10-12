CREATE TABLE IF NOT EXISTS capitalone.huddle (
    HuddleName varchar(255)
);

INSERT INTO capitalone.huddle (HuddleName)
VALUES ('Huddle');


CREATE TABLE IF NOT EXISTS capitalone.MainTable(
    Huddle text,
    InsertDate datetime,
    Metrics text,
	MetricStatus int,
    CompletionPercentage float
);

INSERT INTO capitalone.maintable (Huddle,InsertDate,Metrics,MetricStatus,CompletionPercentage)
VALUES ('Huddle1','2017-10-12','General Servicing Phone Service Levels',1,95);

CREATE TABLE IF NOT EXISTS capitalone.texttable(
	Huddle text,
    InsertDate datetime,
    Metrics longtext,
    News longtext,
    CarryOver longtext
);

INSERT INTO capitalone.texttable (Huddle,InsertDate,Metrics,News,CarryOver)
VALUES ('Huddle1','2017-10-12','General Servicing Phone Service Levels','Metrics text','Write your comments here');
