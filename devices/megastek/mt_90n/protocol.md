---
slug: /megastek/mt_90n/protocol
id: mt_90n-protocol
sidebar_label: Protocol
title: Megastek - MT-90N Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for Megastek MT 90N GPS tracker integration with Plaspy including connection context and compatibility guidance
keywords:
  - Megastek MT-90N protocol
  - Megastek MT-90N GPS protocol
  - MT-90N tracking protocol
  - Megastek GPS tracker protocol
  - MT-90N Plaspy compatibility
  - Plaspy device protocol
  - NB IoT tracker protocol
  - personal tracker communication
  - hybrid positioning protocol
  - tracker platform integration
---

# Megastek - MT-90N Protocol

This page provides a public protocol overview for using the Megastek MT-90N tracker with Plaspy. It describes the general communication context and how the device reports location and telemetry to Plaspy without exposing firmware internals or private parsing logic. The MT-90N is a compact NB‑IoT capable personal tracker that uses hybrid positioning and standard cellular reporting to deliver location, SOS alarms, geo‑fence events, and device status for monitoring.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when the device is configured to report to the Plaspy endpoint. Exact message behavior and available fields can vary by firmware version, hardware revision, and manufacturer implementation, so this page focuses on safe, public facing details needed for integration and troubleshooting rather than device internals.

## Protocol Overview

The tracker communication protocol defines how the MT-90N sends location, status, and alarm information to a remote server so Plaspy can display real time positions, alerts, and historical tracks. The protocol enables the device to identify itself, report telemetry such as GPS position and battery state, and trigger event notifications like SOS and geo‑fence alarms.

- Carries periodic location and telemetry updates that Plaspy maps to live tracking and historical playback.
- Conveys event messages such as SOS alarms, geo‑fence triggers, and low battery notifications.
- Provides device identification and status data that allow Plaspy to associate reports with a specific tracker.
- Supports transport over standard cellular reporting channels so the MT-90N can reach Plaspy in NB‑IoT or GPRS environments.
- Enables remote monitoring and alerting without requiring proprietary management tools on the tracker side.

## How Plaspy Detects the Protocol

Plaspy receives device reports at a single shared endpoint and automatically determines the tracker protocol based on the incoming traffic. In most deployments the user does not need to choose a protocol in Plaspy provided the device is configured to send data to the correct Plaspy endpoint and port.

- Plaspy’s public server endpoint for device reporting is d.plaspy.com and the server IP is 54.85.159.138.
- The Plaspy reporting port is 8888 and all devices supported by Plaspy use this same port.
- Devices can be configured to point at the Plaspy domain or IP and Plaspy will accept the connection.
- When a properly configured MT-90N reports to Plaspy, the platform will automatically detect the tracker protocol and process incoming data.
- Typical user action is limited to confirming the device is set to report to the Plaspy endpoint and selecting the correct transport mode on the device if required.

## Transport and Connection Context

The MT-90N can report via cellular telemetry channels and may be configured to use either UDP or TCP depending on network availability and device configuration. Plaspy accepts both transport types on the shared reporting port, and devices may use either the domain name or the numeric server address to reach the platform.

- The device may be configured to use UDP or TCP for reporting on port 8888.
- Plaspy accepts connections addressed to d.plaspy.com or to the numeric server IP 54.85.159.138.
- All devices in Plaspy use the same port 8888 so configuration is consistent across models.
- Choose UDP or TCP on the device based on carrier and device support; Plaspy supports both for receiving reports.
- Ensure APN and network parameters on the MT-90N are set so the tracker can reach the Plaspy endpoint over the cellular link.

## Protocol Compatibility Notes

- Firmware revisions can change message content and available fields, so device behavior may vary between versions.
- Hardware revisions and regional firmware builds can introduce differences in transport support or default reporting modes.
- Some carriers or NB‑IoT networks may limit or alter UDP versus TCP availability; confirm network capability for your deployment.
- Automatic APN and time zone features on the MT-90N help reduce setup time but should be verified after firmware updates.
- When integrating many devices, keep a sample device nearby to validate that messages arrive at the Plaspy endpoint as expected.
- Always cross check device configuration guidance against manufacturer documentation when in doubt.

## Why Protocol Understanding Matters

Understanding the public protocol context helps ensure reliable device onboarding, faster troubleshooting, and predictable long term operation within Plaspy. Knowing how the MT-90N reports and which transport settings to use reduces configuration time and avoids common connectivity pitfalls.

- Speeds up initial setup by confirming the correct server endpoint and transport are configured on the device.
- Helps troubleshoot missing updates by checking network type, APN, and whether the device reports to d.plaspy.com or the numeric IP.
- Clarifies expectations for which events and telemetry will appear in Plaspy such as SOS, geo‑fence, and battery alerts.
- Supports planning for large deployments where consistent configuration and firmware versioning reduce variability.
- Aids in communication with the device manufacturer or carrier when diagnosing connectivity or reporting discrepancies.

## Why Use Plaspy with This Protocol

Using the Megastek MT-90N with Plaspy provides a compact and practical solution for personal safety, temporary vehicle monitoring, and light telemetry tasks. The MT-90N’s hybrid positioning and NB‑IoT capable connectivity deliver more consistent coverage in urban and indoor environments, and Plaspy maps those reports into a single dashboard for monitoring, alerts, and historical playback. This combination is well suited for organizations seeking straightforward deployment and centralized visibility across many small devices.

To learn more about Plaspy and how it handles device reporting, visit https://www.plaspy.com. For the latest device specific protocol details, firmware notes, and manufacturer guidance verify information on the Megastek website at https://www.megastek.com/ as implementations can change over time.
