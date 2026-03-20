---
slug: /minifinder/watch/configuration
id: watch-configuration
sidebar_label: Configuration
title: MiniFinder - Watch Configuration
sidebar_class_name: menu_item_tracker
description: Public setup guide for configuring the MiniFinder Watch to report to Plaspy using shared server settings and sample SMS commands
keywords:
  - MiniFinder Watch configuration
  - MiniFinder Watch setup
  - MiniFinder Watch Plaspy integration
  - MiniFinder Watch server configuration
  - MiniFinder Watch tracking software configuration
  - MiniFinder Watch GPS platform setup
  - Plaspy tracker configuration
  - wearable GPS tracker setup
  - personal safety tracker configuration
  - MiniFinder Watch SMS commands
---

# MiniFinder - Watch Configuration

This page documents the publicly available configuration context for connecting the MiniFinder Watch to Plaspy. It describes the shared Plaspy server settings you will point the Watch to, example SMS commands provided by the device manufacturer, and practical steps to prepare the device so it can report location, SOS, fall events, and telemetry into a Plaspy account.

Plaspy uses shared server settings for supported devices and automatically detects the tracker protocol when data arrives. Manufacturer-side setup steps can vary depending on firmware, hardware revision, installation type, and vendor tools; this guide focuses on the public values and workflow required to integrate the Watch with Plaspy and references the sample SMS commands supplied by the manufacturer where available.

## Configuration Overview

The goal of this configuration process is to prepare the Watch so it can communicate reliably with Plaspy and become visible in your Plaspy account. Configuration typically includes setting the device time zone, supplying operator APN details for cellular data, and pointing the device to Plaspy's server address and port.

- Configure operator APN so the Watch can use GPRS or LTE data for reporting.
- Set device time zone and local settings to ensure timestamps align with Plaspy records.
- Point the Watch to the Plaspy server endpoint and the unified port so data arrives at Plaspy.
- Validate connectivity and confirm the Watch is visible and reporting events in Plaspy.
- Use the manufacturer provided configuration method such as SMS commands or their official tool to apply settings.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP; the Watch may be configured to use either UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol when the device reports

These server values are the central target for the Watch so that location, SOS and telemetry messages are routed into your Plaspy environment.

## Typical Requirements Before Setup

- A charged and powered MiniFinder Watch with the manufacturer firmware intended for deployment.
- An active cellular service on the Watch that allows data or GPRS connections; a valid APN from the operator.
- Access to the manufacturer configuration method for the Watch such as SMS-based commands or official MiniFinder configuration software.
- A Plaspy account and device registration available to confirm the device appears in the platform after configuration.
- Basic confirmation of device identifiers (IMEI or device ID) to match the Watch to the Plaspy record.
- Optional: knowledge of required placeholders such as {{apn}}, {{apnu}}, and {{apnp}} for operator credentials if used by your SIM provider.

## How This Tracker Connects to Plaspy

When configured, the MiniFinder Watch sends location points, alerts, and telemetry to the shared Plaspy server endpoint and port so the device becomes visible in Plaspy dashboards and alerting workflows. The Watch is set up to report to the Plaspy server address (d.plaspy.com or 54.85.159.138) on port 8888 and Plaspy handles protocol detection.

- The device reports position updates and telemetry to the Plaspy server endpoint and port.
- SOS and fall detection events are transmitted to Plaspy for alert routing.
- Health telemetry such as heart rate and SpO2 is sent to Plaspy when enabled and supported by the device.
- Plaspy receives incoming device messages on port 8888 and automatically determines the correct protocol to parse the data.
- Visibility in Plaspy enables caregivers and administrators to view real-time location, event histories, and alerts.

## Common Configuration Workflow

1. Access the official MiniFinder configuration method for the Watch, for example the manufacturer's SMS commands or configuration tool.
2. Ensure the device has an active SIM with correct APN credentials and confirm the APN values if required.
3. Enter the Plaspy server address either as the domain d.plaspy.com or the server IP 54.85.159.138.
4. Set the server port to 8888 as Plaspy uses the same port for all supported devices.
5. Choose UDP or TCP for transport if the Watch requires an explicit selection.
6. Apply or save the configuration changes on the Watch using the manufacturer procedure.
7. Restart the device if the firmware requires a reboot for network settings to take effect.
8. Validate the device reports to Plaspy and appears in your Plaspy account, confirming location and event messages arrive.

## Example Configuration Commands

The manufacturer provides SMS-based commands for basic setup. Sent in the order shown, these example SMS commands set timezone, APN, and the GPRS server target for Plaspy.

- Set the time zone to UTC+0
```
tz+00
```

- Set the operator APN. Replace the placeholder {{apn}} with your operator APN. If your operator requires a username and password, include {{apnu}} and {{apnp}} as provided by the operator; those fields are optional and may be omitted if not required.
```
S1,{{apn}}{{,{{apnu}},{{apnp}}}}
```
Note: The S1 command may accept optional username and password fields. Keep the placeholders exactly as shown when you have credentials to include.

- Set the GPRS server to the Plaspy server IP and port. This points the Watch to Plaspy on port 8888. The device may also accept the domain form depending on firmware and manufacturer tool.
```
IP1,54.85.159.138,8888
```

Order matters for reliable setup: configure timezone and APN first, then set the GPRS server so the device can establish a data session and report to Plaspy. If your device accepts the domain form you can substitute d.plaspy.com where supported by the Watch configuration tool.

## Configuration Notes

- Commands and parameter formats can vary by firmware version and hardware revision; refer to the Watch manual for device-specific syntax.
- The Watch supports SMS-based configuration in the examples above; manufacturer tools or desktop software may provide alternative methods.
- Choose UDP or TCP according to the device option for transport; Plaspy accepts both on port 8888 and automatically detects the protocol.
- Keep APN placeholders {{apn}}, {{apnu}}, and {{apnp}} available and replace them with the exact values from your mobile operator.
- If configuration does not take effect immediately, reboot the Watch after applying settings and recheck connectivity.

## Why Use Plaspy with This Configuration

Configuring the MiniFinder Watch to report to Plaspy provides centralized visibility of location, SOS events, fall alerts, and health telemetry for caregivers and monitoring teams. Using the shared Plaspy server settings simplifies integration across many devices because Plaspy uses a single port and automatic protocol detection to ingest tracker messages.

Learn more about Plaspy and how it supports device integrations at https://www.plaspy.com. For the latest device specific commands, firmware notes, and manufacturer guidance verify details on the official MiniFinder site https://minifinder.se/ since setup procedures and firmware behavior can change over time.
