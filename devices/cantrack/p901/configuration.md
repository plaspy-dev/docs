---
slug: /cantrack/p901/configuration
id: p901-configuration
sidebar_label: Configuration
title: CanTrack - P901 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for CanTrack P901 integration with Plaspy including server settings and practical setup steps
keywords:
  - cantrack p901 configuration
  - cantrack p901 setup
  - p901 plaspy configuration
  - p901 gps tracker setup
  - cantrack tracker configuration
  - plaspy server configuration
  - vehicle tracking setup
  - gps platform integration
  - real time tracking configuration
  - lone worker tracker setup
---

# CanTrack - P901 Configuration

This page covers the public configuration context for using the CanTrack P901 with Plaspy. It presents the practical server settings and workflow steps you will need to point a P901 device at Plaspy for real time location, telemetry, and alert reporting while describing what to confirm before integration. The P901 is an ultra thin ID card style tracker with LTE/GPRS connectivity, GPS and Beidou positioning, LBS fallback, one key SOS, group PTT and SMS-based remote configuration features that make it suitable for Plaspy integration.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, but manufacturer-side setup steps can vary by firmware, hardware revision, installation type, and vendor tools. Use the Plaspy server values shown below when configuring the P901, and consult CanTrack documentation and vendor tools for device-specific commands, SMS formats, or software configuration panels.

## Configuration Overview

The goal of configuration is to prepare the P901 so it reliably communicates location and event data to Plaspy. The typical process sets the device server endpoint and transport, verifies mobile data connectivity, and confirms the unit appears in the Plaspy platform.

- Configure the device to report to Plaspy using the shared Plaspy server endpoint and port.
- Ensure the P901 has an active SIM and APN settings so LTE or GPRS data can be used to reach Plaspy.
- Select the transport mode (UDP or TCP) required by the device firmware and save the change.
- Validate that the P901 reports GNSS and fallback LBS data to Plaspy and that SOS or alarm events are delivered.
- Confirm firmware is up to date and use manufacturer tools or SMS commands for any required remote configuration.

## Plaspy Server Settings

- Server domain: d.plaspy.com  
- Server IP: 54.85.159.138  
- Port: 8888  
- Transport: device may be configured to use UDP or TCP on port 8888  
- Note: All devices in Plaspy use the same port and Plaspy automatically detects the tracker protocol

## Typical Requirements Before Setup

- A charged and operational P901 with access to the device’s configuration interface or SMS command set.  
- A valid SIM card with a mobile data plan and correct APN settings for LTE/GPRS connectivity.  
- Access to CanTrack configuration tools, SMS command reference, or the vendor provisioning app for the P901.  
- A Plaspy account or deployment where you can verify the device appears after configuration.  
- Knowledge of whether your deployment requires UDP or TCP transport selection on the device.  
- Optional: a test area with open sky for GNSS lock and a stable mobile signal for reliable first-time reporting.

## How This Tracker Connects to Plaspy

When configured for Plaspy, the P901 sends location and event information over the mobile network to the shared Plaspy server endpoint and port. Plaspy receives GNSS positions and LBS fallbacks and displays the device on maps and reports the associated events.

- The tracker reports GNSS derived coordinates (GPS plus Beidou) and falls back to LBS when satellite fix is not available.  
- Telemetry and status updates are transmitted to d.plaspy.com or 54.85.159.138 on port 8888.  
- Transport can be UDP or TCP depending on the device configuration; Plaspy accepts both and auto detects protocol.  
- SOS alarms, status changes, and other event messages are forwarded to Plaspy for alerting and logging.  
- Historical route uploads and telemetry records are visible in Plaspy once the device is successfully registered and reporting.

## Common Configuration Workflow

1. Access the official CanTrack P901 configuration method or software (manufacturer app, web panel, or SMS command set).  
2. Enter the Plaspy server address using either d.plaspy.com or 54.85.159.138 in the server/host field.  
3. Set the server port to 8888 (Plaspy uses the same port for all supported devices).  
4. Choose UDP or TCP transport if the device requires an explicit selection.  
5. Apply or save the configuration using the device tool or by sending the appropriate SMS commands via the vendor documented format.  
6. Restart the P901 if required by the device firmware or after saving changes to ensure settings take effect.  
7. Validate that the device reports to Plaspy by checking your Plaspy deployment for the unit and confirming position and event messages are received.

## Example Configuration Commands

The P901 supports SMS-based remote configuration and manufacturer tools for server and APN setup. Exact command formats and tools vary by firmware and vendor release. Because model-specific command syntax is provided by CanTrack, refer to the official CanTrack SMS command guide or configuration utility for precise commands. Typical actions you will perform with commands or tools include:

- Setting the server host to d.plaspy.com or 54.85.159.138 and port to 8888.  
- Configuring APN and credentials so the device can use LTE/GPRS for data.  
- Enabling the chosen transport mode (UDP or TCP) if required by the device.

If you need SMS examples or step by step command strings, consult CanTrack documentation or the device provisioning guide from your vendor for the exact syntax supported by the P901 firmware.

## Configuration Notes

- Firmware differences can change SMS command syntax and configuration menu layout; always check the P901 firmware notes before applying bulk changes.  
- The P901 supports SMS-based configuration as well as software-based provisioning; choose the method that matches your installation workflow.  
- Evaluate UDP versus TCP based on your network and operational requirements; Plaspy accepts either and will auto detect the protocol.  
- Confirm APN and SIM data plan details before directing the device to the Plaspy endpoint to avoid connectivity delays.  
- When performing mass deployment, test one device first to validate server, port, and transport settings with Plaspy before scaling configuration.

## Why Use Plaspy with This Configuration

Using the CanTrack P901 with Plaspy provides a compact solution for organizations that need continuous visibility, event alerts, and integrated team communications. The P901’s wearable ID card form factor, GNSS plus LBS position reporting, SOS capability, and SMS remote configuration make it well suited to use cases such as security patrols, event staff coordination, and lone worker protection where Plaspy’s mapping, alerts, and history features add operational value.

To learn more about Plaspy and how the platform can receive and process P901 data, visit https://www.plaspy.com. For the latest device specific configuration commands, firmware notes, and manufacturer guidance for the CanTrack P901, verify details on the CanTrack website https://www.cantrackgps.com/ as manufacturer specifications and setup methods can change over time.
