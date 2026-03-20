---
slug: /arknav/r_12/configuration
id: r_12-configuration
sidebar_label: Configuration
title: ArkNav - R-12 Configuration
sidebar_class_name: menu_item_tracker
description: Practical setup guide for ArkNav R-12 to connect with Plaspy using shared server settings and practical configuration steps
keywords:
- ArkNav R-12 configuration
- ArkNav R-12 setup
- ArkNav R-12 server configuration
- ArkNav R-12 Plaspy integration
- ArkNav GPS tracker configuration
- R-12 LTE M tracker setup
- vehicle tracker configuration guide
- fleet tracking platform setup
- Plaspy tracker configuration
- GPS tracker server settings
---

# ArkNav - R-12 Configuration

This page describes the public configuration context for using the ArkNav R-12 GPS tracker with Plaspy. It focuses on the practical, publicly available server settings and the typical steps required to point an R-12 to Plaspy so the device can deliver real time location, telemetry, and event reporting to the platform. The R-12 is an IP67 rated LTE‑M tracker with EGPRS fallback and OTA update capability, and this guide uses those product characteristics as the basis for configuration advice.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while exact manufacturer side setup steps can vary by firmware version, hardware revision, installation type, and vendor configuration tools. Use this page to understand the required Plaspy endpoint details and the typical workflow for configuring an R-12. Always verify device specific controls and the latest firmware notes with the device manufacturer when needed.

## Configuration Overview

Configuring an ArkNav R-12 for Plaspy prepares the device to reliably deliver GNSS positions and event telemetry to the Plaspy platform so vehicles and assets are visible in real time. The aim is to ensure the tracker has correct network access, the carrier APN and device identifiers are set, and the device is pointed at Plaspy using the uniform settings Plaspy expects.

- Point the tracker to the Plaspy server endpoint so packets are routed to the platform.
- Confirm network and SIM connectivity for LTE‑M and EGPRS fallback.
- Set transport and port information if the device configuration requires an explicit transport choice.
- Save or apply the configuration and use the device OTA or debug interface for verification.
- Validate that the R-12 reports position and event messages into Plaspy and appears on your Plaspy instance.

## Plaspy Server Settings

Configure the R-12 to send data to Plaspy using the following public server settings:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888 depending on device configuration
- Plaspy automatically detects the tracker protocol once the device connects

Note that all devices in Plaspy use the same port. You can enter either the domain d.plaspy.com or the IP 54.85.159.138 when configuring the device. If the device UI requires a transport selection, choose UDP or TCP as supported by your installation.

## Typical Requirements Before Setup

- Vehicle power connected and stable so the tracker can boot and connect to the network.
- An active LTE‑M or 2G capable SIM card and service plan that supports the regions you operate in.
- APN and carrier settings available from the SIM provider for data connectivity.
- Access to the official ArkNav configuration method or software such as the provided configuration tool, OTA management, or the device debug port for direct configuration.
- Device firmware version and release notes checked to confirm behavior matches the configuration method you plan to use.
- Physical access for initial installation and testing or an integration plan for remote OTA configuration.

## How This Tracker Connects to Plaspy

The ArkNav R-12 transmits GNSS positions, status, and event messages over the cellular network to Plaspy so fleet operators receive live location and telemetry. The device uses LTE‑M as primary connectivity with EGPRS (2G) fallback where LTE‑M is not available. Once the device is pointed at the Plaspy endpoint, Plaspy ingests the packets and maps them to the appropriate tracker session.

- The tracker is configured to report to the shared Plaspy server endpoint and port.
- Location fixes and event-driven messages such as ignition and motion are sent to Plaspy for mapping and alerts.
- EGPRS fallback provides continued delivery when LTE‑M coverage is unavailable for resilient tracking.
- OTA updates and remote configuration help maintain consistent behavior across deployed units.
- Plaspy automatically detects the tracker protocol so the device can be recognized without manual protocol selection in many cases.

## Common Configuration Workflow

1. Access the official ArkNav configuration method or software for the R-12 such as the vendor configuration tool, OTA management, or the device debug interface.
2. Configure carrier APN and ensure the SIM has correct data service for LTE‑M or EGPRS.
3. Enter the Plaspy server as either d.plaspy.com or 54.85.159.138 in the device server field.
4. Set the port to 8888, since Plaspy uses the same port for all supported devices.
5. Choose UDP or TCP if the R-12 configuration requires an explicit transport selection.
6. Apply or save the configuration and use OTA or the debug console to ensure changes are committed.
7. Restart the device if required by the firmware and validate that the R-12 reports to Plaspy and appears in the platform.

## Example Configuration Commands

The exact commands and interfaces used to configure an R-12 depend on the ArkNav toolset and firmware version. Some integrators use the vendor configuration utility, others use the device debug port or OTA provisioning. Because model specific commands may vary between firmware releases, there are no universal public command strings included here. Consult the ArkNav configuration guide or your vendor for the exact command syntax and any available SMS or serial command sets if supported by your device firmware.

## Configuration Notes

- Firmware differences can change menu locations, available fields, and whether transport selection is required, so confirm behavior for your device firmware version.
- All devices in Plaspy use port 8888 and Plaspy automatically detects the tracker protocol, but some device tools still require you to select UDP or TCP explicitly.
- Use the nano SIM slot and verify APN and carrier connectivity before attempting to register to the Plaspy endpoint.
- If you plan to use immobilizer outputs or other I O features, verify wiring and safety rules for your vehicle and test commands in a controlled environment.
- Take advantage of OTA configuration where possible to reduce the need for physical access after initial installation.

## Why Use Plaspy with This Configuration

Pairing the ArkNav R-12 with Plaspy provides a robust foundation for fleet visibility and real time operational monitoring. The R-12’s LTE‑M primary link with EGPRS fallback, vehicle power protections, and OTA update capability combine with Plaspy’s centralized ingestion and automatic protocol detection to simplify large scale deployments and ongoing device management.

To learn more about Plaspy and how it handles device connections and fleet management features visit https://www.plaspy.com. For the most current device specific setup instructions, firmware notes, and technical documentation refer to the ArkNav official website at https://www.arknavgps.com.tw/. Manufacturer specifications, setup interfaces, and firmware behavior can change over time so verify the latest details with ArkNav before wide scale deployments.
