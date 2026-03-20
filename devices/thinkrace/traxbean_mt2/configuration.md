---
slug: /thinkrace/traxbean_mt2/configuration
id: traxbean_mt2-configuration
sidebar_label: Configuration
title: ThinkRace - Traxbean MT2 Configuration
sidebar_class_name: menu_item_tracker
description: Public setup guide for ThinkRace Traxbean MT2 with Plaspy server settings and practical configuration steps
keywords:
  - ThinkRace Traxbean MT2 configuration
  - Traxbean MT2 setup guide
  - ThinkRace tracker Plaspy configuration
  - Traxbean MT2 server configuration
  - wearable GPS tracker configuration
  - Traxbean MT2 tracking software setup
  - GPS smartwatch Plaspy integration
  - Traxbean MT2 telemetry setup
  - Plaspy device configuration
  - Traxbean MT2 deployment checklist
---

# ThinkRace - Traxbean MT2 Configuration

This page provides public configuration context for using the ThinkRace Traxbean MT2 with Plaspy. It summarizes the Plaspy server settings you need to apply on the device or during vendor setup, explains typical prerequisites, and outlines a practical workflow so the MT2 can report position, SOS events, and telemetry into Plaspy for centralized monitoring.

Plaspy uses shared server settings across all supported devices and automatically detects the tracker protocol once the tracker forwards data to the platform. Exact manufacturer-side configuration steps can vary by firmware, hardware revision, installation type, and vendor tools, so use this guide for the public, practical settings and confirm any device-specific steps with ThinkRace documentation or your vendor tools.

## Configuration Overview

This configuration prepares the Traxbean MT2 to send its location, status, and event data to the Plaspy platform so operators can view and act on real time telemetry. The focus is on providing the correct Plaspy endpoint and transport so the device can establish a stable reporting path.

- Point the device or vendor provisioning tool at the Plaspy server endpoint so telemetry flows into the Plaspy backend.
- Set the network transport and port on the MT2 to match Plaspy details to ensure connectivity.
- Verify device power, SIM and network registration so the MT2 can reach d.plaspy.com or the Plaspy IP.
- Confirm the device reports regularly and that SOS and media events reach Plaspy.
- Validate visibility in Plaspy and adjust device reporting intervals or settings through ThinkRace tools if needed.

## Plaspy Server Settings

- Server domain d.plaspy.com for vendor or device configuration
- Server IP 54.85.159.138 as an alternate server address where required
- Port 8888 for all devices managed by Plaspy
- Transport support for UDP or TCP depending on the device configuration option
- Automatic protocol detection in Plaspy so the platform determines the tracker protocol once data is received

## Typical Requirements Before Setup

- Device is powered and has a charged battery or external power connected
- Active cellular subscription and SIM inserted when using 4G LTE communications
- Access to the official ThinkRace configuration method or vendor provisioning software
- Network coverage where the device will operate so it can register on cellular networks
- Plaspy account and device registration workflow ready for verifying device appearance on the platform
- Knowledge of the MT2 firmware version and any vendor-specific configuration documents

## How This Tracker Connects to Plaspy

The Traxbean MT2 transmits location and event data to the shared Plaspy server endpoint and port so Plaspy can ingest and display telemetry for monitoring and incident response. Once the MT2 is configured to use the Plaspy endpoint, Plaspy will automatically detect the protocol and present the device in the platform.

- Device sends periodic location updates and telemetry to d.plaspy.com or 54.85.159.138 on port 8888
- Transport can be UDP or TCP depending on the selected option during configuration
- SOS button presses and emergency alerts are forwarded to Plaspy for immediate escalation
- Media or camera triggers are sent alongside telemetry when supported and enabled
- Plaspy ingests the stream and applies geo‑fence rules, alerts, and historical reporting

## Common Configuration Workflow

1. Access the official ThinkRace configuration method or vendor provisioning tool for the Traxbean MT2.
2. Enter d.plaspy.com or, where required by the tool, the fallback IP 54.85.159.138 as the server address.
3. Set the server port to 8888, noting that Plaspy uses the same port for all supported devices.
4. Choose UDP or TCP if the device requires a transport selection; Plaspy will auto detect the protocol after data arrives.
5. Apply or save the configuration in the ThinkRace tool or device interface.
6. Restart the device if required by the manufacturer to apply network or server changes.
7. Validate that the MT2 reports to Plaspy by checking device visibility in the platform and confirming received telemetry and event messages.

## Example Configuration Commands

The exact commands and configuration format vary by ThinkRace firmware and provisioning tools. Some environments use vendor software or web portals, while others may accept SMS or OTA commands. In all cases you will specify the Plaspy server domain or IP and the shared port 8888 and choose UDP or TCP if required.

When using a manufacturer tool or provisioning interface, enter one of these as the server endpoint:
- d.plaspy.com
- 54.85.159.138

Set port:
- 8888

If your provisioning method supports command strings or SMS configuration, follow the ThinkRace command format provided by your vendor. Because vendor command formats differ by firmware and tool, consult ThinkRace documentation or your provisioning tool for the exact command syntax.

## Configuration Notes

- Firmware differences can change the exact fields, menu names, or command syntax used to set the server and transport; always check the MT2 firmware release notes.
- Plaspy uses the same port 8888 for all supported devices and automatically detects the tracker protocol after the device sends data.
- Choose UDP when lower overhead is preferred and the network is stable; choose TCP when reliable delivery and session persistence are required, per your installation needs.
- If the device supports both domain and IP entry, prefer d.plaspy.com so DNS can provide future routing or maintenance flexibility.
- Keep a record of firmware version and provisioning steps used during deployment to aid troubleshooting and scale deployments.

## Why Use Plaspy with This Configuration

Configuring the Traxbean MT2 to report to Plaspy centralizes real time location, SOS alerts, and device telemetry into a single monitoring and reporting platform. This combination is useful for organizations that need persistent situational awareness of field personnel, rapid incident escalation, and integrated media or voice context during events.

To learn more about Plaspy and platform capabilities visit https://www.plaspy.com. For the latest device specific configuration methods, firmware notes, and manufacturer guidance verify details on the official ThinkRace site https://www.thinkrace.com/ as vendor documentation and firmware behavior may change over time.
