---
slug: /sentar/rots/protocol
id: rots-protocol
sidebar_label: Protocol
title: Sentar - ROTS Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for using the Sentar ROTS pet GPS tracker with Plaspy for reliable location reporting and integration
keywords:
  - Sentar ROTS protocol
  - Sentar ROTS GPS tracker
  - ROTS communication protocol
  - ROTS tracking protocol
  - Sentar Plaspy compatibility
  - Plaspy device protocol
  - Pet GPS tracker ROTS
  - Sentar tracker integration
  - GPS telemetry Plaspy
  - Sentar wearable tracker
---

# Sentar - ROTS Protocol

This page describes the public protocol context for using the Sentar ROTS pet GPS tracker with Plaspy. It focuses on how the device communicates with Plaspy at a high level, what connection settings are used, and what to check during setup and troubleshooting. The goal is to provide clear, non sensitive protocol guidance so owners and integrators can get reliable tracking results with Plaspy.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when devices report to the platform. Exact protocol behavior for the ROTS tracker can vary by firmware version, hardware revision, and manufacturer implementation, so this page concentrates on public, implementation-agnostic details and practical compatibility notes.

## Protocol Overview

The protocol used by the ROTS tracker enables the device to send periodic location and telemetry to a remote server where Plaspy processes and stores the information. At a basic level, the tracker reports GNSS positions, timestamps, and connectivity status over cellular networks so Plaspy can visualize location, history, and alerts for pet monitoring.

- The protocol conveys position fixes and time information that Plaspy converts into map markers and history records.
- Identification fields in the device reports allow Plaspy to associate incoming messages with the correct device account.
- Telemetry flags communicate device state such as battery, motion, and connectivity that Plaspy surfaces as alerts or status indicators.
- The tracker sends data over the network to Plaspy’s endpoint where parsing and storage occur for live tracking and playback.
- Transport behavior (frequency, retries, and fallbacks between 4G, 3G, and 2G) is managed by the device firmware and affects how often Plaspy receives updates.

## How Plaspy Detects the Protocol

Plaspy receives incoming messages at a shared endpoint and can automatically detect and interpret the tracker protocol when the device is correctly pointed to the platform. In most cases, a device that is configured to report to Plaspy does not require manual protocol selection inside the platform.

- Plaspy listens on a single common server endpoint d.plaspy.com and on the public IP 54.85.159.138.
- All devices supported by Plaspy use the same port, simplifying device configuration and onboarding.
- The ROTS tracker may be configured to report to Plaspy using either UDP or TCP on port 8888.
- When the tracker sends its first reports to the Plaspy endpoint, the platform identifies the device and associates its incoming data stream automatically.
- Users typically only need to ensure the tracker is set to the correct Plaspy hostname or IP and that the transport (UDP or TCP) matches the device configuration.

## Transport and Connection Context

Connection context covers how the ROTS tracker sends data over cellular networks to Plaspy and which endpoints and transport methods are commonly used. Understanding these connection choices helps when setting up SIM provisioning, APN settings, and server address configuration.

- The ROTS device may be configured to use either UDP or TCP on port 8888 depending on device support and user preference.
- Devices can point to the Plaspy host d.plaspy.com or directly to the server IP 54.85.159.138 when registering their reporting destination.
- Plaspy uses port 8888 for all supported devices, so the same port is used regardless of model when sending data to the platform.
- Cellular network fallback from 4G to 3G to 2G is handled by the tracker and influences how frequently Plaspy receives updates.
- Ensure the device APN and SIM settings allow outbound data to reach d.plaspy.com or the listed IP and that network firewalls permit traffic to port 8888.

## Protocol Compatibility Notes

- Firmware revisions may change which fields are present in device reports or how often data is sent; always note firmware version when validating behavior.
- Hardware revisions or regional SKUs can introduce differences in supported bands or telemetry options that affect connectivity and reporting.
- Manufacturer implementation may vary for optional telemetry; confirm which telemetry elements are included in your device model.
- Choose UDP or TCP based on your deployment needs and device settings; some networks perform better with one transport over the other.
- Confirm SIM provisioning, APN, and roaming policies with your carrier to avoid blocked or limited data for reporting to Plaspy.
- Validate compatibility against the manufacturer’s current documentation before large scale rollouts to account for firmware updates or feature changes.

## Why Protocol Understanding Matters

Knowing the public behavior of the ROTS tracker protocol helps ensure reliable initial setup, faster troubleshooting, and predictable long term operation when integrated with Plaspy. Clear protocol context reduces guesswork and speeds up the path to live tracking.

- Correct server hostname or IP and the proper transport selection reduce common connectivity failures.
- Awareness of firmware and hardware revision impacts helps explain differences in reporting frequency or telemetry availability.
- Understanding what the tracker sends allows quicker diagnosis of missing or malformed data during onboarding.
- Proper APN and SIM configuration avoids carrier related interruptions that prevent messages from reaching Plaspy.
- Recognizing that Plaspy uses a shared port and automatic protocol detection removes the need for manual protocol selection in many cases.

## Why Use Plaspy with This Protocol

The Sentar ROTS is a compact, wearable tracker tailored for pet tracking scenarios where consistent location updates and long battery life are important. When paired with Plaspy, owners and operators gain centralized visibility, alerting, and history playback that make pet monitoring practical and easy to manage at scale. Plaspy’s platform processes incoming telemetry from the ROTS tracker so position data, movement history, and basic device state are available through the Plaspy dashboards and notification systems.

To learn more about Plaspy and how it supports devices like the Sentar ROTS, visit https://www.plaspy.com. Note that protocol support, firmware behavior, and specific device implementation details can change over time, so verify the latest device specific protocol and firmware information with the manufacturer at http://www.sentarsmart.com/.
