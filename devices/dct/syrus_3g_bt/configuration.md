---
slug: /dct/syrus_3g_bt/configuration
id: syrus_3g_bt-configuration
sidebar_label: Configuration
title: DCT - Syrus 3G+ BT Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for DCT Syrus 3G+ BT and Plaspy showing server settings, example commands, and practical setup steps
keywords:
  - DCT Syrus 3G+ BT configuration
  - DCT Syrus 3G+ BT setup
  - Syrus 3G+ BT Plaspy
  - DCT tracker configuration
  - Syrus 3G+ BT server configuration
  - Syrus 3G+ BT GPS tracker
  - DCT fleet tracking setup
  - Syrus 3G+ BT integration
  - Plaspy tracker setup
  - Pegasus Gateway integration
---

# DCT - Syrus 3G+ BT Configuration

This page documents the public configuration context for using the DCT Syrus 3G+ BT tracker with Plaspy. It focuses on the practical server settings and the typical device-side steps you will use to point the device at Plaspy so the tracker can report location and telemetry into the platform.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol. Manufacturer-side setup steps can vary by firmware version, hardware revision, installation type, and vendor tools such as Syrus Desk. The example content below includes a Syrus Desk compatible script provided as a public example and explains how to incorporate Plaspy server values.

## Configuration Overview

This configuration process prepares the Syrus 3G+ BT to send telemetry and location data to Plaspy by setting the device APN and the Plaspy server endpoint, then enabling relevant reporting events. The goal is to ensure the tracker is reachable by Plaspy and that Plaspy can automatically interpret the device protocol.

- Set the device APN and related network parameters so cellular data is available for reporting.
- Point the device telemetry destination to the Plaspy server endpoint and port.
- Enable or define time and distance reporting rules and the events that trigger uplinks.
- Save and load the configuration into the device using the manufacturer tool such as Syrus Desk.
- Validate device connectivity and confirm the device appears in Plaspy once reporting begins.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol and all devices in Plaspy use the same port

## Typical Requirements Before Setup

- Access to the official manufacturer configuration tool or method such as Syrus Desk to load scripts or .tmf files.
- A powered and installed Syrus 3G+ BT with a valid cellular SIM and active data service for 3G connectivity.
- The device APN details from the mobile operator; placeholders in example commands preserve APN fields for replacement.
- Basic knowledge of whether your installation requires UDP or TCP transport selection.
- Administrative access to Plaspy so you can verify the device becomes visible after configuration.

## How This Tracker Connects to Plaspy

The Syrus 3G+ BT is configured to forward telemetry and location data to the shared Plaspy server endpoint and port. Once the tracker is pointed at Plaspy, the platform will automatically detect the tracker protocol and process incoming messages for visibility, alerts, and reporting.

- The tracker registers outbound connections to d.plaspy.com or to the server IP and sends telemetry on port 8888.
- Plaspy receives location and sensor streams and correlates them to the device record based on the device protocol.
- Event-driven reports such as time and distance triggers are transmitted to Plaspy when configured on the device.
- Plaspy provides map visibility, historical position records, and event notifications from the received device data.

## Common Configuration Workflow

1. Prepare the device physically and open the manufacturer configuration tool such as Syrus Desk.
2. Create or edit a configuration script or .tmf file and enter the Plaspy server endpoint as d.plaspy.com or as 54.85.159.138.
3. Set the destination port to 8888 in the device configuration.
4. Choose UDP or TCP transport if the device requires an explicit selection.
5. Configure the device APN and related network parameters using the provided placeholders if necessary.
6. Apply or save the configuration and load the .tmf script into the device with Syrus Desk.
7. Restart the device if required by the manufacturer instructions.
8. Validate that the tracker reports to Plaspy and that the device appears in the Plaspy platform.

## Example Configuration Commands

The following example is a Syrus SB script provided as a public Getting Started example. You can copy and paste this content into a new empty text file, save it with a .tmf extension, and load it with Syrus Desk. Preserve the placeholders {{apn}}, {{apnu}}, and {{apnp}} and replace them with your operator APN values.

- Full example script for Syrus Desk

```text
# Syrus SB script
# Getting Started example

# Delete any previous configuration
>SRT;CONFIG<
>SXADP**U

# configuring the APN
>SRFA{{apn}}<
>SRFI<
>SRFL{{apnu}}<
>SRFP{{apnp}}<

# The remote AVL server address and port
>SXADP0000d.plaspy.com;8888<

# A Destination Address holding the server destination
>SDA4;P00<

# Time-only Time And Distance signal definition
>STD80300<

# Event triggered by T&D signal
>SED37NV4;TD8+<

# Input report event
>SED05NV4;IP3+<

# end
```

Notes about placeholders used in the script:
- {{apn}} is the mobile network APN string required for data connectivity.
- {{apnu}} and {{apnp}} are optional APN username and password placeholders if your operator requires authentication.
- The script includes an initial deletion of prior configuration (>SRT;CONFIG<) which you may use for a clean setup during initial deployments; treat that as optional during incremental updates.

## Configuration Notes

- Firmware and Syrus Desk versions may change command syntax or supported script elements; verify with the manufacturer if a command fails.
- Choose TCP or UDP based on your network requirements; Plaspy accepts both transports on port 8888 and will detect the device protocol automatically.
- Replace APN placeholders with the exact values provided by your mobile operator before loading the script.
- The example script is suitable for loading via Syrus Desk as shown, but installers may prefer staged deployment or remote provisioning workflows.
- Confirm device firmware revision and accessory compatibility if you use optional hardware like BLE sensors or satellite backup.

## Why Use Plaspy with This Configuration

Using the Syrus 3G+ BT with Plaspy gives organizations a rugged telematics gateway that forwards vehicle and sensor telemetry to a unified cloud platform. With the shared Plaspy endpoint and automatic protocol detection, you can standardize server settings across a mixed device fleet and streamline onboarding of new units into the platform.

To learn more about Plaspy and how it handles fleet visibility, telemetry, and alerts visit https://www.plaspy.com. For the most current device specific configuration details, firmware notes, and downloadables consult the DCT official documentation at https://www.digitalcomtech.com/ as manufacturer setup methods and firmware behavior can change over time.
