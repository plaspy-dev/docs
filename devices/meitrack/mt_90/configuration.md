---
slug: /meitrack/mt_90/configuration
id: mt_90-configuration
sidebar_label: Configuration
title: Meitrack - MT-90 Configuration
sidebar_class_name: menu_item_tracker
description: Public guide to configure Meitrack MT 90 with Plaspy using server settings and example SMS commands
keywords:
  - Meitrack MT-90 configuration
  - Meitrack MT-90 setup
  - MT-90 Plaspy configuration
  - Meitrack GPS tracker setup
  - MT-90 server configuration
  - Meitrack tracking software
  - MT-90 GPRS setup
  - Plaspy tracker configuration
  - Personal GPS tracker setup
  - MT-90 SMS commands
---

# Meitrack - MT-90 Configuration

This page documents the public configuration context for using the Meitrack MT-90 with Plaspy. It focuses on the practical server settings and example commands commonly used to point the MT-90 to Plaspy so the device can be visible and managed in the Plaspy platform. The content here uses the publicly available SMS command examples for MT-90 configuration while keeping the guidance broadly applicable.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while exact manufacturer side setup steps can vary by firmware version, hardware revision, installation type, and vendor tools. The MT-90 model supports SMS and GPRS configuration paths in public documentation, so this page includes the SMS commands that are commonly used to register the device with Plaspy.

## Configuration Overview

Preparing the MT-90 for use with Plaspy means configuring the device to report over GPRS to Plaspy's shared server endpoint and verifying that the tracker reports correctly. For MT-90 the common public workflow uses SMS commands to set the GPRS server and reporting behavior, but vendor tools or configuration software can also be used where available.

- Configure the MT-90 to use Plaspy server settings so location and event data are delivered to the platform.
- Set reporting intervals and event rules to control update frequency and alerts for Plaspy visibility.
- Validate connectivity and GPRS APN settings so the device can reach the Plaspy endpoint.
- Optionally perform a factory reset or initial setup SMS sequence when preparing a device for first use.
- Confirm the device appears in Plaspy after configuration and that events and locations are visible.

## Plaspy Server Settings

- Server domain d.plaspy.com should be entered where the device requires a hostname.
- Server IP 54.85.159.138 is the numeric endpoint published for Plaspy.
- Port 8888 is the single port used by Plaspy for all supported devices.
- Transport support may be UDP or TCP depending on the device configuration option.
- Plaspy automatically detects the tracker protocol so the platform can accept reports from many common tracker protocols.

## Typical Requirements Before Setup

- A charged and operational MT-90 unit with access to SMS or the manufacturer configuration method.
- A valid SIM card with data enabled and the carrier APN details available for {{apn}}, {{apnu}}, and {{apnp}} placeholders.
- Ability to send SMS commands to the device or access to Meitrack configuration software if preferred.
- Basic knowledge of the device password used for SMS commands; the public sample uses 0000 as the default.
- Stable power source or charged battery during initial configuration to avoid interruptions.

## How This Tracker Connects to Plaspy

The MT-90 is configured to report to Plaspy's shared server endpoint and port so location and event data are forwarded to the platform for monitoring and reporting. Once the MT-90 has valid GPRS connectivity and correct server settings, it will begin sending its configured updates to Plaspy where the platform identifies and decodes the device protocol automatically.

- The device sends periodic position and event messages to d.plaspy.com or 54.85.159.138 on port 8888.
- Transport can be selected as UDP or TCP on the tracker if the firmware requires a choice.
- Plaspy receives the incoming reports and automatically detects the protocol used by the tracker.
- Events and periodic updates appear in Plaspy for operational monitoring and alerting.
- Confirming successful first transmissions ensures the MT-90 is visible and reporting correctly in Plaspy.

## Common Configuration Workflow

1. Access the official Meitrack configuration method for MT-90, typically SMS commands or vendor configuration software.
2. Enter the Plaspy server as either the hostname d.plaspy.com or the server IP 54.85.159.138.
3. Set the server port to 8888 which is the shared Plaspy port for all devices.
4. Choose the transport protocol UDP or TCP if the device requires an explicit selection.
5. Apply or save the configuration on the device and send any required confirmation commands.
6. Restart the device if required by the firmware or after making server changes.
7. Validate that the MT-90 reports to Plaspy by checking the device status and recent locations in the Plaspy platform.

## Example Configuration Commands

The MT-90 can be configured by sending SMS messages to the device. The following commands are the public examples for setting factory defaults and GPRS server parameters. The sample commands use the default password 0000 shown in public documentation. Preserve the placeholders for APN values when sending commands.

- Optional initial factory reset when preparing a device
```text
0000,F11
```
This command resets factory settings and is commonly used as an initial step if you need a clean configuration. Use only when required.

- Set the GPRS server to Plaspy using the server IP and port and include APN placeholders
```text
0000,A21,2,54.85.159.138,8888,{{apn}},{{apnu}},{{apnp}}
```
Explanation:
- 0000 is the default device password in the public sample.
- A21 sets the GPRS server entry.
- 2 indicates primary server type depending on device syntax in Meitrack documentation.
- 54.85.159.138 and 8888 are the Plaspy server IP and port.
- {{apn}} is the carrier APN name placeholder.
- {{apnu}} is an optional APN username placeholder.
- {{apnp}} is an optional APN password placeholder.

- Set the time zone to UTC 0
```text
0000,B36,0
```

- Set the reporting update interval to every 1 minute
```text
0000,A12,6,0
```
This commonly configures periodic GPS reporting behavior; check manufacturer docs for exact parameter meanings.

- Set events configuration
```text
0000,C03,0
```
This sets event reporting options; refer to Meitrack documentation for event bitmask details.

Note on placeholders
- Replace {{apn}} with your mobile carrier APN value. If your carrier requires credentials, replace {{apnu}} and {{apnp}} with username and password. If no credentials are needed, those placeholders can typically be omitted.

## Configuration Notes

- Firmware differences and hardware revisions may change exact SMS syntax or parameter meanings; always cross check with Meitrack documentation for your MT-90 firmware.
- The MT-90 public commands shown use SMS for configuration; vendor tools or a configuration cable may provide alternative methods.
- Choosing TCP versus UDP can affect message delivery characteristics; pick the transport supported and recommended by your deployment and network.
- Plaspy uses port 8888 for all devices so the port is consistent across tracker models supported by the platform.
- Keep a note of the device password and change it according to your security practices after initial setup if supported by the device.

## Why Use Plaspy with This Configuration

Configuring the Meitrack MT-90 to report to Plaspy provides a straightforward path to centralize location, event, and operational visibility for personal tracking and monitoring use cases. Using the shared Plaspy server endpoint and the common port simplifies onboarding multiple devices and reduces per device configuration differences because Plaspy automatically detects the device protocol.

Learn more about Plaspy and how it integrates with devices like the Meitrack MT-90 at https://www.plaspy.com. For the most current device specific commands, firmware notes, and detailed MT-90 technical documentation, verify the latest information on the manufacturer website https://www.meitrack.com/
