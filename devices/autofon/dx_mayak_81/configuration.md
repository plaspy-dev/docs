---
slug: /autofon/dx_mayak_81/configuration
id: dx_mayak_81-configuration
sidebar_label: Configuration
title: AutoFon - DX Mayak 8.1 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for AutoFon DX Mayak 8.1 showing Plaspy server settings and practical setup steps for integration
keywords:
  - AutoFon DX Mayak 8.1 configuration
  - DX Mayak 8.1 setup
  - AutoFon Plaspy configuration
  - DX Mayak 8.1 server configuration
  - AutoFon GPS tracker setup
  - Plaspy tracker integration
  - DX Mayak 8.1 GPS platform setup
  - vehicle tracking configuration
  - asset tracker configuration
  - GPS tracker Plaspy compatibility
---

# AutoFon - DX Mayak 8.1 Configuration

This page provides public configuration context for using the AutoFon DX Mayak 8.1 with Plaspy. It summarizes the practical server settings and the typical workflow needed to register the device with the Plaspy monitoring platform. The DX Mayak 8.1 is a compact battery powered tracker that supports GLONASS plus GPS, long low power interval tracking, event alerts such as movement crash and SOS, GPRS reporting with SMS fallback, BLE presence features, and telemetry fields like battery level temperature satellite count and GSM signal that are suitable for Plaspy integration.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol at the server side. Exact manufacturer configuration steps can vary depending on device firmware hardware revision installation type and the vendor configuration tool you use. This guide focuses on the public Plaspy settings you need to apply on the tracker and on practical validation steps; always check the manufacturer documentation for device specific commands or GUI behavior.

## Configuration Overview

Preparing the DX Mayak 8.1 for Plaspy is primarily about configuring the tracker to report to the common Plaspy server endpoint and port and verifying that messages arrive in the platform. You will use the AutoFon configuration method of your choice to point the device to Plaspy and confirm telemetry and event delivery.

- Configure the tracker to send GPRS reports to the Plaspy server endpoint and port so location and telemetry appear in Plaspy.
- Ensure the transport mode is set to either UDP or TCP on the Plaspy port and save the changes in the device tool.
- Validate device telemetry fields such as battery level satellite count and GSM signal are included in messages received by Plaspy.
- Test event delivery for movement crash and SOS alerts to confirm paired alarm reporting.
- Confirm SMS fallback or retransmission behavior if network connectivity is interrupted so queued messages reach Plaspy when the link is restored.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol and all devices in Plaspy use the same port

## Typical Requirements Before Setup

- A charged and powered DX Mayak 8.1 with access to the device configuration interface such as the Micro USB loader or official configuration tool.
- A valid SIM card activated for GPRS data if you will use GPRS reporting and SMS capability for fallback.
- Manufacturer configuration software or SMS command reference from AutoFon to perform server and APN changes.
- Network coverage and GPRS data availability at the device installation location to allow initial registration.
- Access to Plaspy server details d.plaspy.com or 54.85.159.138 and the port 8888 before configuring the device.
- Permissions to restart or cycle power on the tracker during configuration and validation steps.

## How This Tracker Connects to Plaspy

When configured for Plaspy the DX Mayak 8.1 sends structured GPRS messages to the platform endpoint and uses SMS as a secondary control or fallback channel. Plaspy receives both real time position updates and periodic telemetry ensuring devices remain visible even across temporary network outages.

- The device is pointed to the shared Plaspy server endpoint d.plaspy.com or directly to IP 54.85.159.138 using port 8888.
- Transport may be chosen as UDP or TCP depending on the device configuration interface and installer preference.
- Location telemetry GLONASS plus GPS and AGPS assisted fixes are reported to Plaspy along with battery temperature satellite count and GSM signal.
- Event driven messages such as movement crash and SOS are delivered to Plaspy for immediate alerts and logging.
- The DX Mayak 8.1 retransmits stored messages after connectivity returns so historical events are preserved in Plaspy.
- SMS fallback can be used for remote control or emergency reporting when GPRS is unavailable according to AutoFon instructions.

## Common Configuration Workflow

1. Access the official AutoFon configuration method or software such as the Micro USB loader Windows tool or the documented SMS command set provided by AutoFon.
2. In the device server settings enter the Plaspy server address using either the domain d.plaspy.com or the IP 54.85.159.138.
3. Set the device reporting port to 8888 which is the common Plaspy port used by all supported devices.
4. Choose UDP or TCP as the transport if the device requires selecting a protocol for GPRS reporting.
5. Save or apply the configuration within the manufacturer tool or send the equivalent SMS commands if supported.
6. Restart or power cycle the DX Mayak 8.1 if required by the manufacturer tool to apply new network settings.
7. Validate that the device is reporting to Plaspy by observing incoming telemetry and event messages in the Plaspy platform or through Plaspy diagnostics and logs.

## Example Configuration Commands

The exact commands and the method you use to set server and port depend on AutoFon configuration tools firmware and available interfaces. Plaspy accepts reports addressed to d.plaspy.com or 54.85.159.138 on port 8888 using either UDP or TCP and Plaspy will automatically detect the tracker protocol. Refer to the AutoFon command reference or loader tool for the device specific syntax to set these values.

If you have AutoFon SMS command templates or loader commands provided by the manufacturer include the server and port exactly as shown above. Keep the domain or IP and port consistent when you configure the device so reports reach Plaspy reliably.

## Configuration Notes

- Firmware differences and hardware revisions can change the exact configuration menu labels and SMS command syntax; always confirm with the AutoFon documentation for your device revision.
- Choosing UDP or TCP affects delivery characteristics; UDP is common for lightweight telemetry while TCP provides a connected session depending on tracker firmware support.
- The DX Mayak 8.1 supports SMS fallback and queued retransmission so verify both GPRS and SMS behaviors during testing.
- Use the manufacturer loader or SMS command set for authoritative setup steps and preserve any placeholder values the tool requires.
- Micro USB configuration utilities may require drivers or a specific OS environment; check the loader tool requirements before starting.

## Why Use Plaspy with This Configuration

Using the DX Mayak 8.1 with Plaspy gives organizations a straightforward path to collect long term low power tracking data and event alerts in a centralized monitoring environment. The combination of GLONASS plus GPS telemetry GPRS reporting SMS fallback and robust message retransmission helps maintain visibility for vehicles assets and portable equipment in mixed connectivity scenarios.

To learn more about Plaspy visit https://www.plaspy.com and to verify the most current device specific configuration methods firmware behavior and manufacturer details please consult the AutoFon website https://www.autofon.ru/ for official documentation and tools.
