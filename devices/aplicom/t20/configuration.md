---
slug: /aplicom/t20/configuration
id: t20-configuration
sidebar_label: Configuration
title: Aplicom - T20 Configuration
sidebar_class_name: menu_item_tracker
description: Configuration guide for Aplicom T20 with Plaspy including server settings, setup workflow, and connectivity checklist for vehicle tracking integration
keywords:
  - Aplicom T20 configuration
  - Aplicom T20 setup
  - Aplicom T20 Plaspy
  - Aplicom T20 server configuration
  - Aplicom GPS tracker setup
  - Plaspy device configuration
  - fleet tracking configuration
  - vehicle telematics setup
  - T20 tracking setup
  - Aplicom telematics integration
---

# Aplicom - T20 Configuration

This page documents the public configuration context for using the Aplicom T20 tracker with Plaspy. It focuses on the server settings and practical setup steps you will apply on the device or via Aplicom configuration tools so the T20 can report location and telemetry to the Plaspy platform.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, but exact manufacturer-side setup steps can vary by firmware version, hardware revision, installation type, and the vendor tools you use. Use this guide as a practical integration reference and confirm device-specific details with Aplicom documentation where needed.

## Configuration Overview

This configuration prepares the Aplicom T20 to send position, CAN bus telemetry, and peripheral events to Plaspy using the platform's shared server endpoint and port. The goal is to make the device visible in Plaspy for live tracking, reporting, and alerts while ensuring reliable cellular connectivity and manageable device behavior.

- Configure the device to report to Plaspy's shared server endpoint so events arrive in the platform.
- Verify transport selection and network connectivity so messages reach Plaspy reliably.
- Validate that the T20 is reporting location and telemetry to the platform after configuration.
- Ensure OTA and remote management tools are coordinated with Plaspy use to keep firmware and settings consistent.
- Confirm any edge processing or SDK logic continues to forward required events to Plaspy.

## Plaspy Server Settings

- server domain d.plaspy.com
- server IP 54.85.159.138
- port 8888
- transport support for UDP or TCP
- automatic protocol detection in Plaspy

These values are the public endpoint settings used by Plaspy. Plaspy uses the same port for all supported devices and will automatically detect the tracker protocol when the tracker connects.

## Typical Requirements Before Setup

- An active LTE‑M capable device configuration and a valid cellular data subscription for the T20.
- Access to Aplicom configuration tools or the official configuration method recommended by your vendor or installer.
- Power and mounting of the device so it can obtain GNSS fix and maintain cellular connectivity during testing.
- Device firmware review to confirm any settings or commands required for server configuration are supported.
- Confirmation of any required APN or operator settings for the cellular network you will use.
- Administrative access to Plaspy to confirm device registration and visibility after setup.

## How This Tracker Connects to Plaspy

The Aplicom T20 forwards processed telemetry, CAN data, and event inputs to Plaspy over the device's cellular link using the shared Plaspy server endpoint and port. Plaspy then interprets the incoming protocol and ingests location and telemetry for mapping, reporting, and alerts.

- The tracker is configured to report to the Plaspy endpoint d.plaspy.com (or direct IP 54.85.159.138) on port 8888.
- You may configure transport as UDP or TCP; the device sends messages using the selected transport to Plaspy.
- Plaspy automatically detects the protocol used by the tracker so standard device protocols are recognized without per-device packet parsing setup.
- Reports include location updates and device-originated telemetry events that the T20 forwards after any edge processing.
- Successful connection and regular message flow provide visibility in Plaspy for live tracking and event monitoring.

## Common Configuration Workflow

1. Access the official Aplicom configuration method or software recommended by your installer or vendor (for example the Aplicom configuration tool or OTA management provided by Aplicom).
2. In the device server settings enter the Plaspy endpoint using d.plaspy.com or the direct IP 54.85.159.138 as permitted by your configuration tool.
3. Set the server port to 8888 (Plaspy uses the same port for all supported devices).
4. Choose UDP or TCP if the device requires a transport selection; save the transport choice.
5. Apply or save the configuration in the device tool and ensure any required APN or operator details are present for LTE‑M connectivity.
6. Restart the device if the firmware or configuration tool requires a reboot for changes to take effect.
7. Validate that the device reports to Plaspy by checking device status and recent messages in the Plaspy platform.

## Example Configuration Commands

The Aplicom T20 may be configured using Aplicom tools, OTA management, or the device's configuration interface depending on your deployment. Exact command syntax and configuration methods vary by firmware and management tool. Typical manufacturer steps are to set the server host to d.plaspy.com or 54.85.159.138, set the server port to 8888, choose UDP or TCP if required, and save the configuration. Consult Aplicom configuration documentation or your configuration utility for the precise commands or GUI fields.

## Configuration Notes

- Different firmware versions and hardware revisions may expose server and transport settings in different menus or require different command syntax; always confirm with the Aplicom documentation for your device firmware.
- Choose UDP or TCP based on network and integration preferences; Plaspy accepts either transport on port 8888 and will detect the tracker protocol automatically.
- When using Aplicom Silver Cloud or another OTA tool, coordinate remote updates so server settings remain targeted at d.plaspy.com or 54.85.159.138 on port 8888.
- Ensure APN and cellular operator settings are correct for LTE‑M service to allow outbound data to Plaspy.
- Installer best practice is to test connectivity and visibility in Plaspy immediately after applying settings and after any firmware update.

## Why Use Plaspy with This Configuration

Using the Aplicom T20 with Plaspy provides a practical path to centralized fleet visibility and operational monitoring. The T20's ability to forward processed CAN and sensor events makes it well suited for use cases that require live location, vehicle health telemetry, and event-driven alerts inside Plaspy dashboards and workflows.

To learn more about Plaspy and platform capabilities visit https://www.plaspy.com. For the latest device specific configuration methods, firmware behavior, and manufacturer details verify the Aplicom documentation at https://www.aplicom.com/ before deploying at scale.
