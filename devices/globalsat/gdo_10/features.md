---
slug: /globalsat/gdo_10/features
id: gdo_10-features
sidebar_label: Features
title: GlobalSat - GDO-10 Features
sidebar_class_name: menu_item_tracker
description: Public feature summary of the GlobalSat GDO-10 GNSS disciplined oscillator and how it integrates with Plaspy for timing monitoring
keywords:
  - GlobalSat GDO-10 features
  - GDO-10 GPS tracker features
  - GlobalSat GDO-10 capabilities
  - GDO-10 timing oscillator
  - GDO-10 1PPS 10MHz
  - GlobalSat timing oscillator Plaspy
  - GDO-10 GNSS disciplined oscillator
  - GNSS timing reference GDO-10
  - Plaspy compatible GDO-10
  - GDO-10 lab timing device
---

# GlobalSat - GDO-10 Features

This page describes the public feature context for using the GlobalSat GDO-10 with Plaspy. It focuses on the device capabilities that matter to monitoring and telemetry workflows: the GDO-10 is an OCXO based GNSS disciplined oscillator that provides a high-accuracy 1PPS output, a phase locked 10 MHz square wave, and integrated GNSS support for GPS, GLONASS, and Galileo. The unit includes a +5 V active antenna supply and is designed to be integrated into timing and telemetry architectures that feed centralized monitoring platforms such as Plaspy.

Exact feature availability and behavior can vary by firmware version, hardware revision, installation type, and the manufacturer implementation. Integration and the set of visible telemetry fields in Plaspy depend on how the GDO-10 is connected to a telemetry gateway or monitoring interface that exposes timing status and health metrics to the platform.

## Feature Overview

The GDO-10 brings laboratory grade timing outputs and GNSS disciplining into a managed telemetry environment. When paired with a monitoring gateway or I/O adapter that exposes its status signals, Plaspy can present synchronization health and alarm conditions alongside other monitored assets.

- High accuracy 1PPS output for precise second level time synchronization and timestamp verification.
- Phase locked 10 MHz square wave for use as a frequency reference in test and measurement systems.
- GNSS support for GPS, GLONASS, and Galileo to provide disciplined long term timing accuracy.
- Built in +5 V active antenna power to simplify antenna installation and ensure reliable signal acquisition.
- Designed for lab, telecom, and infrastructure deployments where stable timing is required.
- Plaspy compatible for telemetry ingestion and centralized monitoring of synchronization health.

## Core Features of GlobalSat - GDO-10

- OCXO backbone providing strong short term frequency stability and predictable holdover behavior.
- GNSS disciplining using GPS GLONASS and Galileo for long term timing accuracy.
- High accuracy 1PPS output for second level time alignment and timestamping.
- Phase locked 10 MHz square wave output tied to the 1PPS reference for frequency domain applications.
- Integrated +5 V active antenna supply for powered GNSS antennas.
- Straightforward electrical interfaces intended for integration with instruments and monitoring gateways.
- Form factor and performance targeted at laboratory benches, telecom sites, and infrastructure timing hubs.

## How These Features Work with Plaspy

When the GDO-10 is integrated into a telemetry path that reports its status, Plaspy can display synchronization quality and related health indicators as part of an overall monitoring dashboard. Plaspy is designed to automatically detect compatible device protocols where applicable, letting operators see timing status alongside other assets.

- Visibility of GNSS lock state and synchronization status when the monitoring gateway exposes those signals.
- Real time indicators for 1PPS lock quality and timing stability presented in Plaspy dashboards.
- Monitoring of 10 MHz reference presence or health via the telemetry interface used to connect the unit to Plaspy.
- Combined reporting so timing health can be correlated with other monitored equipment and site telemetry.
- Alarm and notification integration in Plaspy when a supported gateway reports out of tolerance timing conditions.

## Typical Use Cases

- 5G cellular base station synchronization where reliable 1PPS and 10 MHz references are required.
- LEO satellite ground station and communications timing for uplink and downlink coordination.
- Laboratory test benches and calibration setups needing a disciplined frequency and time reference.
- Production line test systems that rely on repeatable timing for measurement automation.
- Large infrastructure time distribution and synchronization monitoring across sites.
- Centralized telemetry dashboards that include timing equipment health alongside asset tracking.

## Feature Availability Notes

- Feature presentation in Plaspy depends on the telemetry gateway or interface used to expose the GDO-10 signals to the platform.
- Firmware updates or hardware revisions from the manufacturer can change available telemetry fields or behavior.
- Regional or installation variants may affect GNSS performance, antenna selection, or power requirements.
- The GDO-10 is a timing device rather than a vehicle tracker so expected telemetry differs from fleet trackers.
- Consult the manufacturer documentation for the exact connector signals and installation recommendations before integrating.

## Why Use Plaspy with These Features

Using the GDO-10 together with Plaspy provides a centralized view of timing health and synchronization quality across distributed sites. Plaspy lets operations teams correlate timing performance with other monitored systems, set alerts on lock status, and include disciplined timing metrics in routine reporting and incident workflows. This improves operational oversight for teams responsible for telecom infrastructure, satellite ground stations, test labs, and other environments that depend on precise GNSS synchronized time.

To learn more about how Plaspy can manage timing endpoints and telemetry across your deployment visit https://www.plaspy.com. For the latest device specifications firmware notes and installation guidance verify current details with the manufacturer at https://www.globalsat.com.tw/
