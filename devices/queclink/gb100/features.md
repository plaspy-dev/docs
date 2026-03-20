---
slug: /queclink/gb100/features
id: gb100-features
sidebar_label: Features
title: QuecLink - GB100 Features
sidebar_class_name: menu_item_tracker
description: A compact IP65 vehicle tracker with GNSS accuracy and behavior telemetry compatible with Plaspy
keywords:
  - QuecLink GB100 features
  - QuecLink GB100 GPS tracker features
  - GB100 Plaspy compatibility
  - GB100 vehicle tracker
  - GB100 accelerometer events
  - GB100 message buffering
  - GB100 IP65 tracker
  - GPS tracker for UBI
  - fleet tracking GB100
  - automotive financing tracker
---

# QuecLink - GB100 Features

This page describes the public feature context for using the QuecLink GB100 vehicle tracker with Plaspy. It summarizes the device capabilities that are relevant to Plaspy users and integrators, including how the tracker supplies location and event telemetry that Plaspy can use for live dashboards, alerts, and analytics.

Exact feature availability can vary by firmware version, hardware revision, installation type, and manufacturer implementation. The summary below uses the GB100 description as the factual basis and highlights practical capabilities without replacing the official QuecLink documentation.

## Feature Overview

The GB100 is a compact, vehicle mounted GPS tracker designed for large telematics rollouts such as usage based insurance, automotive financing, and fleet management. It combines high sensitivity GNSS positioning, multi mode communications, an internal 3 axis accelerometer, and robust message buffering inside an IP65 enclosure to simplify hidden installations and protect data during connectivity interruptions.

- Real time GNSS tracking with high sensitivity positioning and reported accuracy under 2.5 m CEP for reliable location reporting.
- Built in 3 axis accelerometer with high sample rate and pre and post event traces to capture driver behavior and shock events.
- Flexible communications via TCP, UDP, and SMS to deliver telemetry to back end platforms like Plaspy.
- Internal message buffering of up to 10,000 messages to preserve data during temporary network outages.
- Compact IP65 rated enclosure sized for under hood or hidden installs to reduce fitment complexity and cost.

## Core Features of QuecLink - GB100

- High sensitivity u blox All in One GNSS receiver with fast time to first fix and 1 second logging while driving.
- Quad band GSM with GPRS support and configurable TCP UDP or SMS transport for real time and fallback reporting.
- Built in 3 axis accelerometer sampling at 100 Hz with shock data packages and pre/post event traces.
- Internal rechargeable NiMH backup battery and wide operating voltage range for broad vehicle compatibility.
- On device buffering capable of storing large message queues to protect data integrity during outages.
- Environmental protection with an IP65 waterproof enclosure for vehicle mounting and hidden installations.
- Programmable reporting by time distance and mileage plus configurable geofence and speed alert support.

## How These Features Work with Plaspy

Plaspy receives the GB100 telemetry and event data and makes it available for mapping, alerts, and analytics workflows. Plaspy detects the tracker protocol automatically and ingests position and event streams so operations teams can monitor assets and build policy driven responses.

- Real time location updates and frequent reporting while driving appear in Plaspy live maps and tracking views.
- Driver behavior events derived from accelerometer traces are available for analytics and UBI scoring workflows in Plaspy.
- Buffered messages are uploaded when connectivity returns so historical telemetry and events reach Plaspy for complete reporting.
- Power and battery status telemetry can be surfaced in Plaspy to flag external power loss or device tampering.
- Configured geofence and speed alerts from the device can trigger Plaspy notifications and automated workflows.

## Typical Use Cases

- Large scale usage based insurance programs relying on GNSS and accelerometer telemetry for scoring and underwriting.
- Fleet management and route oversight with real time tracking, speed alerts, and geofence monitoring.
- Automotive financing and asset monitoring with continuous vehicle telemetry and power loss detection.
- Accident reconstruction and driver coaching using pre and post event accelerometer traces and shock data.
- Anti theft monitoring and recovery workflows driven by location updates and power status alerts.

## Feature Availability Notes

- Feature sets such as reporting intervals, geofence limits, and event thresholds may vary by firmware and hardware revision.
- Regional cellular bands and regulatory variants can affect available communications behavior and should be confirmed for your market.
- Installation choices such as hidden under hood mounting can influence GPS reception; GNSS performance depends on placement.
- Some remote management functions such as FOTA or device configuration options may not be specified for every hardware revision.
- For device level parameter details and the latest specifications consult official QuecLink documentation.

## Why Use Plaspy with These Features

Using the QuecLink GB100 with Plaspy gives organizations a practical path to collect consistent location and behavior telemetry at scale. The device design emphasizes hidden installation, reliable buffering, and accelerometer based event capture, which aligns with Plaspy needs for continuous tracking, behavior analytics, and operational alerting. Plaspy makes the device data accessible through live maps, alerts, and reporting so teams can act on fleet and risk signals in near real time.

To learn more about how Plaspy works with compatible trackers visit https://www.plaspy.com. For the most current device specifications, firmware details, and manufacturer guidance verify the GB100 documentation at https://www.queclink.com/
