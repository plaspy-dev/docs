---
slug: /eelink/gpt60/protocol
id: gpt60-protocol
sidebar_label: Protocol
title: EElink - GPT60 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol guide for the EElink GPT60 tracker and Plaspy compatibility with practical integration notes
keywords:
  - eelink gpt60 protocol
  - eelink gpt60 gps protocol
  - eelink gpt60 communication protocol
  - eelink gpt60 tracking protocol
  - eelink gpt60 plaspy
  - eelink gps tracker protocol
  - plaspy device compatibility
  - plaspy tracker protocol
  - personal gps tracker protocol
  - gps tracker integration plaspy
---

# EElink - GPT60 Protocol

This page covers the public protocol context for using the EElink GPT60 tracker with the Plaspy platform. It describes how the device communicates in general terms, the role of the tracker protocol in delivering location and event data, and what to check when configuring the device to report to Plaspy. The focus is on public, non sensitive information to help administrators and integrators prepare for deployment.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when a device reports to the platform. Exact protocol behavior for the GPT60 can vary depending on firmware version, hardware revision, and manufacturer implementation. For device specific command sets and firmware notes consult the manufacturer documentation where necessary.

## Protocol Overview

The communication protocol governs how the GPT60 exchanges telemetry, status, and events with a server such as Plaspy. For the GPT60 this includes GNSS based location with Wi‑Fi and LBS fallback, event reports like SOS and fall detection, and remote configuration capabilities supported by the device firmware and the EELINK 2.1 protocol where available.

- Enables periodic and event driven transmission of location and status to Plaspy for mapping and history.
- Carries device identity and operational state so Plaspy can associate messages with the correct asset and profile.
- Delivers alerts and events such as SOS, fall or vibration notifications for immediate handling in Plaspy.
- Supports remote configuration and parameter updates from backend systems where EELINK 2.1 is implemented.
- Provides telemetry needed for geofencing, alerts, and two way voice session initiation through higher level platform workflows.

## How Plaspy Detects the Protocol

Plaspy receives telemetry from many tracker models and uses a shared endpoint and port to accept reports. When a GPT60 is configured to report to the Plaspy endpoint, the platform inspects the incoming connection and message context to identify the protocol and route data to the appropriate handlers. In typical cases you do not need to manually select the protocol inside Plaspy.

- Plaspy server domain for device reporting is d.plaspy.com and the server IP is 54.85.159.138.
- The common Plaspy port for device connections is 8888 and all devices in Plaspy use the same port.
- Plaspy automatically detects the tracker protocol when the device reports to the Plaspy endpoint.
- If the GPT60 is properly pointed at d.plaspy.com or 54.85.159.138 and configured to use the supported transport, detection and data flow to Plaspy will begin without manual protocol selection.
- Confirm device reporting settings and APN or cellular configuration are correct on the device side to ensure messages reach Plaspy.

## Transport and Connection Context

Transport choices affect how the GPT60 sends data to Plaspy. Depending on device firmware and configuration, the GPT60 may support both UDP and TCP transports. Plaspy accepts device traffic on the same port for all supported models, simplifying endpoint configuration.

- The GPT60 may be configured to use UDP or TCP on port 8888 depending on device support and configuration.
- Devices can be pointed to the Plaspy server domain d.plaspy.com or directly to the server IP 54.85.159.138.
- Plaspy listens on port 8888 for device connections and uses the same port across devices to simplify setup.
- Using the correct transport type and server address on the device is essential so telemetry and events reach Plaspy reliably.
- Network settings such as APN and cellular registration affect delivery; verify those when devices fail to report.

## Protocol Compatibility Notes

- The GPT60 description indicates support for EELINK 2.1 for remote configuration and telemetry; confirm this in your firmware release notes.
- Firmware versions can change message cadence, supported event types, and configuration commands; always check the installed firmware build.
- Hardware revisions or regional firmware variants can alter available features such as two way voice or Bluetooth sensor support.
- Transport preference between UDP and TCP may be selectable in device settings; choose the transport supported by your network and organization.
- Manufacturer default server settings may need to be updated to point the GPT60 to d.plaspy.com or 54.85.159.138 on port 8888.
- When integrating at scale, validate a small number of devices first to confirm behavior before wide rollout.

## Why Protocol Understanding Matters

Understanding how the GPT60 communicates helps ensure reliable setup, faster troubleshooting, and predictable long term operation with Plaspy. Knowing the high level protocol capabilities makes it easier to align device settings, network configuration, and Plaspy workflows for alerts, geofencing, and telemetry.

- Helps you verify correct device reporting and server targeting so data appears in Plaspy dashboards.
- Speeds troubleshooting when messages are missing by guiding checks for transport, server address, and firmware behavior.
- Supports planning for battery life and reporting intervals by aligning device telemetry mode with platform needs.
- Improves event handling by confirming which alerts the device can generate and deliver to Plaspy.
- Aids coordination between field device configuration and centrally managed workflows for geofences, notifications, and voice.

## Why Use Plaspy with This Protocol

Using the GPT60 with Plaspy gives organizations continuous visibility into people and portable assets with a focus on personal safety and event driven alerts. Plaspy collects the device telemetry delivered by the GPT60 so teams can map movement, respond to SOS and fall events, and combine telemetry with other data sources for operational oversight.

Plaspy accepts device reports at d.plaspy.com and 54.85.159.138 on port 8888 using either UDP or TCP where the device supports it. Plaspy uses the same port for all supported devices and automatically detects the tracker protocol so properly configured GPT60 units typically do not require manual protocol selection inside the platform. Learn more about Plaspy on the main website https://www.plaspy.com and verify the latest device protocol and firmware details with the manufacturer at https://www.eelink.com.cn/. Protocol support, firmware behavior, and manufacturer implementation can change over time so checking the official manufacturer documentation ensures the most current and accurate device information.
