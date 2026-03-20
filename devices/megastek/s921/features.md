---
slug: /megastek/s921/features
id: s921-features
sidebar_label: Features
title: Megastek - S921 Features
sidebar_class_name: menu_item_tracker
description: Public feature overview of the Megastek S921 home base station compatible with Plaspy for presence detection and alarm reporting
keywords:
  - Megastek S921 features
  - Megastek S921 GPS tracker features
  - S921 home base station
  - Megastek S921 Plaspy
  - home zone detection
  - presence detection base station
  - supervised monitoring
  - S921 alarm reporting
  - residential monitoring
  - Megastek base station
---

# Megastek - S921 Features

This page provides a public feature overview of the Megastek S921 fixed home base station and how it is used with the Plaspy fleet and monitoring platform. It describes the practical capabilities you can expect when the S921 is integrated with Plaspy and paired ankle trackers, focusing on presence detection, alarm reporting, and operational value for supervised residential or facility deployments.

Exact feature availability and behavior can vary by device firmware, hardware revision, installation method, pairing configuration, and the manufacturer's implementation. Always confirm device-specific capabilities, firmware options, and installation guidance with the manufacturer and test behavior in your planned deployment.

## Feature Overview

The S921 is a compact, permanently installed home base station designed to detect paired ankle trackers when they are within a typical indoor range and to forward presence and alarm events to a monitoring platform such as Plaspy. Its main value is improving home‑zone accuracy, reducing false outdoor events, and providing reliable alarm and health reporting for continuous supervision.

- Automatic at home presence reporting when a paired ankle tracker is detected within approximately 15–20 meters in a typical indoor environment.
- Forwarding of multiple alarm types to the monitoring platform including power‑off, SOS, tamper/remove, and hit/impact alerts to support timely responses.
- Internal backup battery and mains power support to preserve reporting during temporary power interruptions and reduce false offline events.
- Local wireless link to the paired ankle tracker for indoor detection combined with cellular connectivity for server communication and remote monitoring.
- Compact fixed form factor for discreet permanent installation inside residences or supervised facilities.

## Core Features of Megastek - S921

- Home‑zone presence detection that reports "at home" status when a paired ankle tracker is within the S921 detection range.
- Multi‑mode connectivity for robust server reporting and redundancy when paired with monitoring services.
- Alarm suite including power‑off, SOS emergency, tamper/remove, and hit/impact reporting for integrity monitoring.
- Periodic heartbeat or status packets to provide regular device health checks to the monitoring backend.
- Internal backup battery to maintain operation during mains interruptions and reduce false offline events.
- Fixed installation design for permanent placement and reliable coverage of residential rooms or facility spaces.
- Designed integration with monitoring platforms such as Plaspy to centralize telemetry and event reporting.

## How These Features Work with Plaspy

When the S921 is deployed with compatible ankle trackers, it acts as a local gateway that informs Plaspy whether the tracked unit is present at the home location or outside of it. Plaspy then uses those events and status packets to present presence, alarms, and device health to operators and workflows.

- Presence reporting in Plaspy showing home‑zone status when the base station detects the paired tracker and outdoor GPS or other location sources when the tracker is out of range.
- Alarm forwarding so power‑off, SOS, tamper/remove, and impact alerts appear within Plaspy for alerting and incident handling.
- Heartbeat and periodic status updates that help Plaspy monitor device health and connectivity for auditability.
- Platform dashboards and event feeds that consolidate home‑zone events, alarms, and telemetry for centralized monitoring and reporting.
- Support for combining S921 presence reports with paired tracker telemetry so Plaspy can distinguish at‑home versus outdoor activity.

## Typical Use Cases

- Parole and community supervision programs that need automated at‑home verification and tamper or SOS alerts.
- Assisted living or care facility monitoring to confirm presence, receive impact or assistance requests, and streamline caregiver response.
- Residential detention or house arrest where accurate home‑zone detection reduces false outdoor position reports.
- Facility deployments that use fixed anchors to complement outdoor GPS tracking for clear indoor/outdoor status.
- Any supervised monitoring scenario that benefits from local presence detection combined with centralized platform reporting.

## Feature Availability Notes

- Feature behavior can depend on device firmware version and hardware revision; manufacturers may update alarms, reporting intervals, or detection logic over time.
- Installation location and mounting affect the practical detection range; walls, building materials, and placement can change coverage from the typical 15–20 meter indoor figure.
- The capabilities reported by the S921 are also influenced by the features and configuration of the paired ankle tracker; combined system behavior depends on both devices.
- Regional variants of the S921 may differ in connectivity options or regulatory approvals; check the device variant for your deployment region.
- For exact alarm definitions, packet contents, and pairing procedures, consult the official Megastek documentation and installation guides.

## Why Use Plaspy with These Features

Using the S921 together with Plaspy gives organizations a clearer picture of at‑home status and alarm events while centralizing telemetry and workflows. Plaspy consolidates presence reports, alarms, and heartbeat health checks into dashboards and event streams that help operators respond quickly, maintain audit trails, and reduce false alerts caused by indoor/outdoor transitions.

If you want to learn more about how Plaspy can be used with the Megastek S921, visit https://www.plaspy.com. For the most current and device specific technical details, firmware notes, and installation guidance, verify information with the manufacturer at https://www.megastek.com/
