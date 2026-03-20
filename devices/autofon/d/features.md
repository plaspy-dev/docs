---
slug: /autofon/d/features
id: d-features
sidebar_label: Features
title: AutoFon - D-Маяк Features
sidebar_class_name: menu_item_tracker
description: Overview of AutoFon D-Маяк GPS tracker features and Plaspy compatibility for real time tracking alerts and telemetry
keywords:
  - AutoFon D-Маяк
  - AutoFon D Beacon
  - D-Маяк features
  - AutoFon GPS tracker
  - D-Маяк Plaspy compatibility
  - covert GPS beacon
  - long life GPS tracker
  - black box buffer
  - GPRS GPS tracker
  - vehicle tracking with Plaspy
---

# AutoFon - D-Маяк Features

This page summarizes the public feature context for using the AutoFon D‑Маяк tracker with Plaspy. It highlights the device capabilities that are relevant for monitoring, alerting, and historical telemetry in Plaspy, and explains how those capabilities are typically reflected on the platform.

Exact feature availability can vary by device firmware, hardware revision, installation type, and manufacturer implementation. Please treat the items below as a practical overview based on the device description and consult manufacturer documentation for the most current, device specific details.

## Feature Overview

The AutoFon D‑Маяк is a compact autonomous GSM/GLONASS+GPS beacon designed for covert installations and long term anti theft deployments. Its combination of long battery life, multi constellation navigation, flexible reporting, and event detection makes it suitable for remote asset protection and discreet vehicle recovery when paired with a monitoring platform like Plaspy.

- Long autonomous operation on replaceable battery cells for extended covert deployment
- GLONASS plus GPS positioning to improve location performance over single constellation devices
- GPRS monitoring with SMS reporting fallback for persistent delivery of location and events
- Digital accelerometer driven event detection plus SOS button for immediate alerts
- Large black box buffer to store unsent GPRS packets and preserve telemetry during outages
- Auxiliary control, audio monitoring, and owner presence tag for additional situational awareness

## Core Features of AutoFon - D-Маяк

- Autonomous power operation designed for long life on two CR123A batteries and support for external power options
- Combined GLONASS and GPS navigation for improved positional accuracy
- GPRS based real time reporting together with configurable SMS reporting modes
- Digital accelerometer that detects movement start, impacts, rollovers, and similar events
- Dedicated SOS microbutton and external alarm input for urgent event signaling
- Universal auxiliary channel for remote control of vehicle systems when configured
- Built in black box buffer capable of retaining large numbers of unsent GPRS packets
- Built in microphone and RF owner presence tag to extend telemetry beyond position alone
- Remote firmware update capability over GPRS and configurable reporting behavior

## How These Features Work with Plaspy

Plaspy ingests location and event messages from the D‑Маяк and presents them on maps, timelines, and alert channels so operators can monitor assets in real time. The device can be configured to report over GPRS with SMS fallback and Plaspy automatically detects the tracker protocol for straightforward integration.

- Device location and telemetry appear on Plaspy maps and historical playback for incident review
- SOS and alarm input events generate immediate alerts and timeline entries for operator response
- Black box buffer uploads stored packets to Plaspy after connectivity is restored, preserving continuity
- Plaspy can forward remote commands back to the device to trigger the auxiliary channel where allowed
- Audio monitoring and RF owner presence tag status are available as supplementary telemetry in the platform
- The D‑Маяк reports into Plaspy infrastructure and the platform supports common transport modes so protocol detection and routing are handled automatically

## Typical Use Cases

- Covert vehicle anti theft and rapid recovery where discreet installation and long battery life are critical
- Valuable cargo and container tracking where buffer storage and persistent reporting protect telemetry
- Remote asset guarding for sites without reliable mains power such as kiosks or seasonal storage
- Discreet personal or animal tracking when a compact long life beacon is required
- Supplementary fleet management use where concealed units provide per asset location and event telemetry
- Incident investigation and security response using audio and accelerometer event records

## Feature Availability Notes

- Feature sets and exact behavior depend on firmware version and hardware revision from the manufacturer
- Installation type and wiring or external power presence can enable or disable certain capabilities
- Regional radio and regulatory variants may change available GSM bands or reporting options
- Remote firmware update capability may be limited by network availability or configuration
- Review manufacturer release notes and device settings to confirm supported reports and commands

## Why Use Plaspy with These Features

Using the AutoFon D‑Маяк with Plaspy gives organizations a practical way to turn long life, covert GPS beacon data into operational visibility, automated alerts, and historical telemetry. Plaspy centralizes incoming location and event streams so teams can monitor movement, respond to alarms, and retrieve buffered telemetry after outages without manual packet recovery.

If you want to learn more about how Plaspy supports trackers like the AutoFon D‑Маяк and to explore platform capabilities, visit https://www.plaspy.com. For the most current device specific specifications, firmware notes, and installation guidance, verify details with the manufacturer at https://www.autofon.ru/.
