---
slug: /cantrack/tk102/protocol
id: tk102-protocol
sidebar_label: Protocol
title: CanTrack - TK102 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol notes for using the CanTrack TK102 with Plaspy including transport settings and compatibility guidance
keywords:
  - CanTrack TK102
  - CanTrack TK102 protocol
  - TK102 GPS tracker
  - CanTrack protocol
  - TK102 Plaspy compatibility
  - GPS tracking protocol
  - vehicle tracking TK102
  - GPS tracker communication
  - GPRS GPS protocol
  - fleet management tracker
---

# CanTrack - TK102 Protocol

This page provides public protocol context for using the CanTrack TK102 with Plaspy. It explains how the device commonly reports location and status data to an internet server and what that means when integrating the TK102 with Plaspy for real time tracking and monitoring. The information here focuses on connection and protocol context that is safe to publish and useful for setup and troubleshooting.

Plaspy uses a shared set of connection settings for supported trackers and automatically detects the tracker protocol when a device reports to the platform. Exact protocol behavior for the TK102 can vary by firmware version, hardware revision, and manufacturer implementation. Review manufacturer documentation for device specific behavior and firmware notes before deployment.

## Protocol Overview

The communication protocol of the TK102 defines how the tracker sends position, alarms, and status information over the mobile network to an internet server. For Plaspy integration, the protocol's role is limited to enabling the device to identify itself and deliver usable telemetry that Plaspy can interpret and display.

- Enables the device to report GPS position and movement events to a server for real time tracking
- Transmits alarm and status notifications that Plaspy can map to alerts and history entries
- Carries device identifiers so Plaspy can associate incoming records with the correct tracker
- Supports multiple transport options depending on device configuration and network conditions
- Allows fallback behaviors such as SMS or local storage when GPRS is unavailable

## How Plaspy Detects the Protocol

Plaspy receives data from the TK102 at a common endpoint and automatically determines the tracker protocol used by the incoming device. In most deployments you will not need to select a protocol inside Plaspy if the TK102 is configured to report to the Plaspy endpoint and correct transport settings.

- Plaspy listens on a single platform port for all supported trackers and automatically detects the incoming protocol
- The Plaspy server domain is d.plaspy.com and the platform IP is 54.85.159.138 for direct addressing
- All devices in Plaspy use the same port which simplifies device configuration and onboarding
- If the device is configured to report to the Plaspy endpoint using standard settings, manual protocol selection is typically unnecessary
- Verify device reporting configuration and mobile network connectivity if the automatic detection does not appear to work

## Transport and Connection Context

The TK102 can deliver location and alarm data either via the mobile data network or fallback channels depending on configuration. For Plaspy use, the key transport context is the address and port the device reports to and whether it uses UDP or TCP.

- Devices may be configured to use UDP or TCP on port 8888 when reporting to Plaspy
- The Plaspy server domain to use is d.plaspy.com or the direct IP 54.85.159.138
- Plaspy uses port 8888 as the shared reporting port for all devices on the platform
- Choose UDP or TCP based on device capabilities and network reliability for your deployment
- Ensure the tracker APN and GPRS settings are correct so the device can reach the Plaspy endpoint

## Protocol Compatibility Notes

- TK102 behavior can differ across firmware versions and hardware revisions even for the same model name
- Manufacturer default settings may point the tracker to a third party server; update the reporting address to Plaspy if needed
- Transport selection matters: some firmware revisions prefer UDP while others support TCP reliably
- Some TK102 units rely on SMS or local TF card storage when GPRS is unavailable; server reporting requires active mobile data
- Confirm that alarms and optional features such as geo fencing or voice surveillance are supported by the firmware you are using
- Always validate compatibility against the manufacturer documentation and any firmware release notes

## Why Protocol Understanding Matters

Understanding the TK102 reporting protocol helps ensure successful setup, accurate telemetry, and fewer false alarms when using Plaspy. Knowing the connection context speeds troubleshooting and supports long term reliability of your tracking deployment.

- Helps verify that the device is sending data to the correct Plaspy endpoint and port
- Clarifies why a device might report via SMS or local storage instead of GPRS in some conditions
- Informs transport selection and APN configuration for consistent server connectivity
- Assists in troubleshooting missing updates, incorrect positions, or alarm delivery issues
- Enables better planning for fleet rollouts where multiple firmware versions may be in use

## Why Use Plaspy with This Protocol

Using the CanTrack TK102 with Plaspy provides a practical way to centralize location, alarm, and status data from personal and vehicle trackers into a single operational view. Plaspy’s platform accepts reports from the TK102 when the device is configured to point to the Plaspy endpoint and port, making it straightforward to add TK102 devices to your monitoring and reporting workflows.

To learn more about how Plaspy works with devices like the TK102 visit https://www.plaspy.com. Please verify the latest device specific protocol details, firmware behavior, and implementation notes on the manufacturer site at https://www.cantrackgps.com/ as features and firmware can change over time.
