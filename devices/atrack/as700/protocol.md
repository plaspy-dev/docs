---
slug: /atrack/as700/protocol
id: as700-protocol
sidebar_label: Protocol
title: ATrack - AS700 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol guidance for using the ATrack AS700 GPS tracker with Plaspy for device communication and integration
keywords:
  - ATrack AS700 protocol
  - ATrack AS700 GPS protocol
  - AS700 tracking protocol
  - AS700 Plaspy compatibility
  - ATrack GPS tracker protocol
  - AS700 communication protocol
  - ATrack AS700 LTE tracker
  - asset tracking protocol Plaspy
  - industrial GPS tracker protocol
  - AS700 telemetry protocol
---

# ATrack - AS700 Protocol

This page covers the public protocol context for using the ATrack AS700 tracker with Plaspy. It explains how the tracker reports location and telemetry to the Plaspy service and what connection settings you should expect when configuring devices for cloud ingestion. The focus here is on non sensitive, high level communication details relevant to integration and troubleshooting.

The AS700 is a rugged, solar assisted LTE Cat.1 tracker designed for long term outdoor deployments and is Plaspy compatible. Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol. Exact protocol behavior can vary by firmware, hardware revision, and manufacturer implementation, so device specifics should be verified against ATrack documentation when needed.

## Protocol Overview

The tracker protocol is the set of rules the AS700 uses to report GNSS fixes, sensor readings, and event messages to a server so that Plaspy can ingest and display that data. This page does not reproduce proprietary message formats; instead it describes the role of the protocol and the common expectations for successful communication with Plaspy.

- Enables the AS700 to transmit GNSS fixes, battery and solar status, accelerometer events, and Bluetooth sensor telemetry to Plaspy.
- Carries identity and status information so Plaspy can attribute incoming messages to the correct device record.
- Supports both periodic reporting and event driven messages for motion, tamper, or sensor thresholds.
- Allows the device to report hybrid positioning data such as Wi Fi scans and Bluetooth witness reports for improved indoor accuracy.
- Ensures Plaspy receives the telemetry needed for real time tracking, historical reporting, and alerting.

## How Plaspy Detects the Protocol

Plaspy is built to accept incoming device data on a shared endpoint and to identify the tracker protocol automatically. When an AS700 is pointed at the Plaspy endpoint using the documented connection settings, manual protocol selection inside the platform is typically not required.

- Plaspy listens on a consistent endpoint d.plaspy.com and the public server IP 54.85.159.138 for device reports.
- All devices in Plaspy use the same port so configuration is simplified for large fleets.
- Plaspy automatically detects the tracker protocol when a properly formatted device message arrives at the endpoint.
- Users normally configure the AS700 to report to the Plaspy endpoint; once data arrives Plaspy will route it to the correct device record.
- If a device is not appearing in Plaspy, verify device reporting settings, SIM and connectivity, and that the device is pointed at d.plaspy.com or the public IP.

## Transport and Connection Context

The AS700 supports IP based transport over cellular and can be configured to use UDP or TCP depending on device firmware and user configuration. For connection to Plaspy, use the shared port and endpoint values provided below so the device can reach the platform reliably.

- The AS700 may be configured to use UDP or TCP on port 8888 for data transport to Plaspy.
- Devices should be set to report to d.plaspy.com or to the IP address 54.85.159.138 as an alternative.
- Plaspy’s listening port for all supported devices is 8888 which simplifies provisioning and firewall rules.
- Choose UDP or TCP according to the tracker firmware capabilities and the behavior you require from the transport layer.
- Confirm APN and cellular connectivity on the device so messages can reach the Plaspy endpoint over LTE.

## Protocol Compatibility Notes

- Firmware revisions can change reporting intervals, available telematics fields, and transport choices; always check the device firmware release notes.
- Hardware revisions sometimes alter available features such as Bluetooth sensor behavior or GNSS performance; validate against your model SKU.
- Manufacturer configuration tools may provide options for UDP or TCP transport and for selecting the target host; ensure these are pointed at d.plaspy.com or the Plaspy IP.
- Battery and solar telemetry fields may be present or absent depending on firmware and the deployed configuration.
- Hybrid positioning capabilities such as Wi Fi scanning and Bluetooth witness reporting may require specific firmware settings to be enabled.
- When integrating at scale, test a small number of units first to confirm device firmware and Plaspy ingestion meet your operational needs.

## Why Protocol Understanding Matters

Understanding the communication protocol and connection context helps ensure timely setup, reliable reporting, and effective troubleshooting when deploying the AS700 with Plaspy. Knowing what the device is expected to send and how it reaches Plaspy reduces downtime and supports predictable fleet operations.

- Speeds up initial provisioning by ensuring APN, host, and transport are configured correctly.
- Helps diagnose connectivity problems by separating network transport issues from device configuration issues.
- Clarifies which telemetry fields you can expect to appear in Plaspy for dashboards and alerts.
- Guides firmware update planning when new features or fixes affect reported data.
- Assists with security and firewall planning through knowledge of the target host and consistent port usage.

## Why Use Plaspy with This Protocol

Using the AS700 with Plaspy gives organizations a practical way to turn rugged, solar powered telemetry into actionable fleet and asset intelligence. The AS700’s long life, hybrid positioning, and sensor inputs complement Plaspy’s real time visibility, alerting, and historical reporting to support container, trailer, generator, and heavy equipment use cases.

To learn more about Plaspy and how the platform ingests device telemetry, visit https://www.plaspy.com. For the latest firmware behavior and device specific protocol details verify information with the manufacturer at https://www.atrack.com.tw/ as vendor implementation and firmware can change over time.
