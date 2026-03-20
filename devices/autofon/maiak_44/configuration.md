---
slug: /autofon/maiak_44/configuration
id: maiak_44-configuration
sidebar_label: Configuration
title: AutoFon - Маяк 4.4 Configuration
sidebar_class_name: menu_item_tracker
description: Guide to configure AutoFon Маяк 4.4 for Plaspy with server settings workflow and setup notes
keywords:
- AutoFon Маяк 4.4 configuration
- AutoFon GPS tracker setup
- Mayak 4.4 Plaspy configuration
- AutoFon tracker server configuration
- Plaspy device setup
- vehicle tracking setup
- GPS tracker configuration guide
- Mayak 4.4 setup instructions
- Plaspy compatible trackers
- asset tracking configuration
---

# AutoFon - Маяк 4.4 Configuration

This page documents the public configuration context for using the AutoFon Маяк 4.4 tracker with Plaspy. It collects the Plaspy server values and practical setup guidance that apply to integrating this model so the unit can report location and basic telemetry to the Plaspy platform using SMS and interval GPRS packets as supported by the device.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol at the platform side. Exact manufacturer side setup steps can vary by device firmware, hardware revision, installation type, and the configuration tools a vendor provides, so follow this guide together with the official AutoFon documentation for the most current device specific instructions.

## Configuration Overview

The goal of this configuration is to prepare the Mayak 4.4 to reliably send location, alarm, and life signal data to Plaspy using the platform's shared endpoint and port. This includes setting the device to use GPRS packet reporting or SMS as appropriate, verifying connectivity, and confirming that Plaspy receives the device updates.

- Configure the tracker to report to the Plaspy server endpoint so location and alarm packets are routed into your Plaspy account.
- Ensure transport and port are set to match Plaspy settings so the device reaches the platform over GPRS packet mode.
- Verify battery, SIM, and network readiness for intermittent GPRS reporting and SMS control used by the Mayak 4.4.
- Validate device reporting by checking life signs, periodic position updates, and alarm messages inside Plaspy.
- Enable or confirm authorized control numbers and PIN protection so command SMS flows between Plaspy and the tracker when needed.

## Plaspy Server Settings

Use the following public Plaspy network settings when configuring the device or entering server information in manufacturer tools:

- Server domain d.plaspy.com as the primary host name for Plaspy ingestion.
- Server IP 54.85.159.138 can be used where numeric host entry is required.
- Port 8888 is the single port used by Plaspy for all devices.
- Transport support for UDP or TCP depending on the device configuration interface; the unit may be configured using UDP or TCP on port 8888.
- Plaspy automatically detects the tracker protocol so the platform can accept device messages once they arrive on the shared port.

Note: Plaspy uses the same port for all supported devices so you only need to set port 8888 for this tracker to align with the platform.

## Typical Requirements Before Setup

- A charged or powered Mayak 4.4 unit with battery installed or external power applied.
- An active SIM card with voice/SMS and data/GPRS enabled and sufficient balance or data allowance for interval reporting.
- Access to the official AutoFon configuration method or software and the device manual for command syntax and setup procedures.
- The device configured with operator APN settings if required by your mobile operator for GPRS packet transmission.
- A list of authorized phone numbers and PIN codes to enable SMS control and prevent unauthorized commands.
- Network coverage at the installation site adequate for GSM and GPS reception for periodic location updates.

## How This Tracker Connects to Plaspy

The Mayak 4.4 sends location and status information to Plaspy using the device reporting modes it supports. In practice the tracker is set to point its GPRS reporting or send SMS messages so Plaspy can ingest and present the data on maps and alerts.

- The tracker sends interval GPRS packets to the Plaspy server endpoint d.plaspy.com (or 54.85.159.138) on port 8888.
- SMS alerts and control messages are used for remote commands and alarm delivery where configured.
- Plaspy automatically detects the incoming tracker protocol once packets arrive on the shared port and processes location and telemetry.
- Life signal and periodic status messages are forwarded to Plaspy for device health monitoring and reporting.
- Auxiliary channel events and alarm input notifications are delivered as SMS or GPRS packets to the configured Plaspy endpoint.

## Common Configuration Workflow

1. Access the official AutoFon configuration method or software as documented by the manufacturer.
2. In the device network settings enter d.plaspy.com or 54.85.159.138 as the server host.
3. Set the device port to 8888 (Plaspy uses the same port for all supported devices).
4. Choose UDP or TCP as the transport option if the device requires a transport selection.
5. Configure operator APN settings if required so GPRS packets can be delivered from the tracker.
6. Apply or save the configuration using the AutoFon tool or SMS commands provided in the user manual.
7. Restart or power cycle the device if required by the manufacturer to activate new network settings.
8. Validate that the device reports to Plaspy by checking for life sign messages and a first position packet in the Plaspy interface.

## Example Configuration Commands

The exact configuration commands and the method to send them depend on AutoFon tools, firmware version, and whether you configure by SMS or a manufacturer's PC utility. Because model configuration commands are provided by AutoFon and can vary, follow the AutoFon user manual for the precise syntax to set server, port, transport, APN, and authorized numbers.

If you use SMS to configure the device, the manufacturer manual will list the SMS command templates. If you use a vendor application, enter d.plaspy.com or 54.85.159.138 and port 8888 in the network or server fields, choose UDP or TCP where requested, then apply and restart the device.

## Configuration Notes

- Firmware variations can change SMS command syntax and the set of available configuration parameters; always confirm the command set with the AutoFon manual for your firmware version.
- The Mayak 4.4 is optimized for intermittent reporting to extend battery life; choose reporting intervals that balance tracking needs with battery autonomy.
- Selecting UDP versus TCP may affect delivery behavior under poor network conditions; choose the transport that best fits your reliability versus overhead needs.
- APN, operator restrictions, and SIM card settings can block GPRS packet delivery if not configured correctly; verify operator APN before relying on GPRS reporting.
- Keep an authorized number list and PIN protection configured to prevent unauthorized remote control via SMS.

## Why Use Plaspy with This Configuration

Using AutoFon Маяк 4.4 with Plaspy provides a straightforward path to monitor covert or low-power assets. The tracker’s SMS and interval GPRS reporting modes pair well with Plaspy’s ability to ingest intermittent packets, display position history, trigger alerts, and send command SMS when intervention is needed, enabling effective asset oversight with minimal maintenance.

To learn more about Plaspy and supported workflows visit https://www.plaspy.com. For the most current device specific commands, firmware notes, and setup instructions consult the official AutoFon documentation at https://www.autofon.ru/ since device configuration methods and firmware behavior can change over time.
