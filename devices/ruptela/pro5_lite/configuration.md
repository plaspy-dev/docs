---
slug: /ruptela/pro5_lite/configuration
id: pro5_lite-configuration
sidebar_label: Configuration
title: Ruptela - Pro5 Lite Configuration
sidebar_class_name: menu_item_tracker
description: Public guide to configure Ruptela Pro5 Lite for use with Plaspy using shared server settings and practical setup steps
keywords:
  - Ruptela Pro5 Lite configuration
  - Ruptela Pro5 Lite setup
  - Ruptela Pro5 Lite server configuration
  - Ruptela Pro5 Lite Plaspy
  - Plaspy tracker configuration
  - GPS tracker configuration guide
  - Pro5 Lite setup guide
  - Ruptela GPS configuration
  - fleet tracking setup
  - vehicle telematics configuration
---

# Ruptela - Pro5 Lite Configuration

This page covers the public configuration context required to connect a Ruptela Pro5 Lite tracker to the Plaspy platform. It explains the shared server settings Plaspy uses, what to prepare on the device and in the field, and practical workflow guidance to register and validate a Pro5 Lite for live tracking with Plaspy.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol when data arrives. Exact manufacturer side setup steps can vary by firmware version, hardware revision, installation type, and the Ruptela provisioning tools you use. Use this guide as a practical reference and confirm device specific instructions with Ruptela documentation when needed.

## Configuration Overview

Configuring Pro5 Lite for Plaspy is focused on pointing the device to Plaspy server endpoints, selecting the correct transport, ensuring cellular connectivity, and validating that telemetry and position data reach the platform. The goal is a reliable, continuously reporting device that appears in Plaspy for live monitoring and historical analysis.

- Set the device server to Plaspy using the public server address or IP to ensure data is routed to Plaspy.
- Choose the appropriate transport protocol if the tracker requires a selection for UDP or TCP.
- Verify cellular or connectivity prerequisites so the tracker can reach d.plaspy.com on the shared Plaspy port.
- Save and apply the configuration, then confirm the tracker registers and reports telemetry to Plaspy.
- Validate position updates and telemetry streams in Plaspy to confirm correct parsing and visibility.

## Plaspy Server Settings

Use the following public Plaspy connection details when configuring the Pro5 Lite device. Plaspy uses the same port for all supported devices and will automatically detect the tracker protocol when packets arrive.

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol

## Typical Requirements Before Setup

- Confirm the Pro5 Lite has power and any internal backup battery is functional.
- Ensure an active SIM card with a data plan and correct APN information if using cellular data for reporting.
- Have access to Ruptela configuration methods such as Ruptela Device Center, SMS commands, or USB configuration tools as applicable.
- Know the device firmware version and check for any device specific notes in Ruptela documentation.
- Obtain any required credentials or identifiers needed by Plaspy or your provisioning workflow.
- Prepare a test environment or single vehicle to validate settings before large scale deployment.

## How This Tracker Connects to Plaspy

When configured, the Pro5 Lite reports GNSS fixes and telemetry to the Plaspy server endpoint using the shared Plaspy port. Plaspy ingests the packets, automatically recognizes the device protocol, and presents position and telemetry data for live monitoring and analytics.

- The tracker is set to send uplink data to d.plaspy.com or 54.85.159.138 on port 8888.
- Transport may be configured as UDP or TCP depending on tracker firmware and installer preference.
- Plaspy automatically detects the protocol and parses location plus telemetry streams.
- Live GNSS position updates appear in Plaspy dashboards once the device successfully reports.
- CAN, I/O and sensor telemetry sent by the device will be forwarded to Plaspy for event processing and reporting.

## Common Configuration Workflow

1. Access the official Ruptela configuration method or software for Pro5 Lite such as Ruptela Device Center, SMS configuration, or USB configuration tools.
2. Enter the Plaspy server by hostname d.plaspy.com or by server IP 54.85.159.138 as the device destination.
3. Set the device port to 8888 which is the shared port used by Plaspy for all supported trackers.
4. If the device requires a transport selection, choose UDP or TCP according to installation needs.
5. Provide APN and SIM settings if prompted so the device can establish cellular connectivity.
6. Apply or save the configuration and follow any prompts from the Ruptela tool to commit settings.
7. Restart the tracker if required by your firmware or the configuration tool to begin reporting.
8. Validate that the device reports to Plaspy and appears with live position and telemetry in the platform.

## Example Configuration Commands

The exact commands and configuration strings for Pro5 Lite depend on Ruptela tools and firmware. Ruptela commonly supports configuration via Device Center, SMS, GPRS or USB interfaces. When using Ruptela configuration workflows, point the server to d.plaspy.com or 54.85.159.138 and set the port to 8888. Choose UDP or TCP if your device requires a transport selection. Always refer to Ruptela documentation or the Device Center tool for precise command syntax and examples for your firmware version.

## Configuration Notes

- Firmware differences can change available configuration options and command syntax. Verify commands and menu locations against your device firmware release notes.
- Pro5 Lite supports secure transport features; confirm whether your deployment uses TLS or other encryption options and how that integrates with Plaspy expectations.
- TCP and UDP behave differently under cellular networks. Choose UDP for lighter overhead when acceptable, or TCP for session reliability depending on coverage and operator behavior.
- Plaspy uses a single port 8888 for all devices and automatically detects tracker protocols, so using the shared port simplifies multi model deployments.
- If using SMS based provisioning or Ruptela tools, retain a record of the server and port values used for large scale rollouts.

## Why Use Plaspy with This Configuration

Connecting Ruptela Pro5 Lite to Plaspy delivers a straightforward route to live position updates, telemetry ingestion, and operational visibility for fleet and asset managers. The Pro5 Lite hardware provides the vehicle interfaces and sensors fleet operators need, and Plaspy receives and normalizes those streams so dashboards, alerts, and reports reflect vehicle status in real time.

To learn more about Plaspy and how it handles device integration visit https://www.plaspy.com. For the latest device specific configuration methods, firmware behavior, and manufacturer details verify current information on the official Ruptela website https://ruptela.com/.
