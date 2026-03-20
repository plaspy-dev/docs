---
slug: /coban/bn_401a/protocol
id: bn_401a-protocol
sidebar_label: Protocol
title: Coban - BN-401A Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol guide for Coban BN 401A showing how the device communicates with Plaspy for tracking and alerts
keywords:
  - Coban BN 401A protocol
  - Coban BN 401A GPS protocol
  - Coban BN 401A tracking protocol
  - Coban BN 401A Plaspy compatibility
  - Coban GPS tracker protocol
  - BN 401A protocol
  - BN 401A Plaspy
  - motorcycle GPS protocol
  - vehicle tracking protocol
  - fleet tracking Coban
---

# Coban - BN-401A Protocol

This page describes the public protocol context for using the Coban BN-401A with Plaspy. It focuses on high level communication and integration information that helps fleet managers and integrators understand how the device reports position, status and alarms to the Plaspy platform without exposing private protocol internals.

The BN-401A is Plaspy compatible out of the box and delivers GNSS position, event telemetry and alarms over standard transport methods. Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol, however exact protocol behavior can vary by firmware version, hardware revision and manufacturer implementation. Consult manufacturer documentation for device and firmware specific details.

## Protocol Overview

The BN-401A uses its built in cellular modem and fallback transport options to deliver location and event data to a remote server endpoint. In practice, the device reports GNSS coordinates, ACC/ignition state, alarm events and telemetry that Plaspy consumes for live tracking and alerts.

- Enables real time location updates and event reporting from the tracker to Plaspy
- Carries status signals such as ACC ignition, low battery, movement or shock alerts and SOS events
- Supports configurable reporting strategies to balance update frequency and data usage
- Sends telemetry that Plaspy maps to live location, history playback and alarm workflows
- Uses standard transport channels to ensure resilient delivery under variable network conditions

## How Plaspy Detects the Protocol

Plaspy receives incoming connections on a single shared endpoint and automatically detects which tracker protocol is being used. When a BN-401A is configured to report to Plaspy it will be recognized and processed without requiring manual protocol selection inside Plaspy in most cases.

- Plaspy accepts tracker connections to the shared server domain d.plaspy.com
- The platform also accepts connections to the server IP 54.85.159.138
- Plaspy listens on port 8888 and uses that port for all supported devices
- Devices may use UDP or TCP to report to the Plaspy endpoint depending on device settings
- If the device is correctly pointed to the Plaspy endpoint, manual protocol choice in Plaspy is typically not required

## Transport and Connection Context

Connection behavior for the BN-401A depends on cellular coverage, device configuration and chosen transport mode. The device supports TCP, UDP and SMS transport methods so integrators can select the best option for coverage and reliability.

- The device can be configured to use UDP or TCP on port 8888
- Devices may also be pointed directly to the domain d.plaspy.com or to the numeric server address 54.85.159.138
- Plaspy uses the same port 8888 for all devices to simplify onboarding and firewall rules
- TCP offers session oriented delivery while UDP can reduce latency and overhead depending on configuration
- SMS may be used as a fallback or for remote configuration when data connectivity is unavailable

## Protocol Compatibility Notes

- Firmware versions and hardware revisions can change message detail and available features; always confirm the device firmware level when troubleshooting
- Manufacturer side configuration commands and SMS setup options may differ between firmware releases
- Transport selection between UDP and TCP can affect delivery characteristics and should match the device configuration
- Some features such as remote immobilizer behavior, alarm thresholds or reporting intervals are controlled by device configuration rather than the platform
- Validate region specific variants and supported network bands against official product documentation for proper cellular compatibility
- When in doubt, reference the manufacturer manuals for device specific command sets and configuration steps

## Why Protocol Understanding Matters

Understanding how the BN-401A communicates helps with initial setup, firewall configuration, troubleshooting connectivity issues and ensuring reliable long term operation with Plaspy. A practical familiarity with the device communication model reduces guesswork during deployment and support.

- Ensures correct endpoint and transport settings are applied on the device for Plaspy ingestion
- Helps diagnose why a device is not reaching the server or why events are delayed
- Guides decisions on reporting intervals to optimize data usage while retaining critical alerts
- Clarifies which signals the tracker will forward to Plaspy for mapping, alerts and history
- Aids coordination between field technicians and backend operators during firmware updates or hardware swaps

## Why Use Plaspy with This Protocol

The BN-401A offers a compact, motorcycle focused tracker with the common telemetry and alarm signals fleet operators need. Using it with Plaspy provides centralized visibility, alerting and history playback for small vehicle fleets, helping operators react to theft attempts, ignition events and abnormal behavior in real time.

Plaspy makes onboarding simpler by using a single listening endpoint at d.plaspy.com and 54.85.159.138 on port 8888 for all devices and by automatically detecting the tracker protocol when the device is pointed to the platform. To learn more about Plaspy and platform capabilities visit https://www.plaspy.com. Please verify the latest device protocol details, firmware behavior and manufacturer configuration information on the official Coban site https://www.coban.net/ since device implementations and firmware can change over time.
