---
slug: /dct/syrus_3g/configuration
id: syrus_3g-configuration
sidebar_label: Configuration
title: DCT - Syrus 3G+ Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for DCT Syrus 3G plus with Plaspy server settings and example Syrus Desk script for quick setup
keywords:
  - DCT Syrus 3G+ configuration
  - DCT Syrus 3G+ setup
  - Syrus 3G+ Plaspy
  - Plaspy tracker configuration
  - Syrus Desk script
  - Pegasus Gateway integration
  - Syrus IoT kit integration
  - vehicle tracking setup
  - GPS tracker server configuration
  - telematics hub configuration
---

# DCT - Syrus 3G+ Configuration

This page documents the public configuration context for using the DCT Syrus 3G+ tracker with Plaspy. It gathers the key server settings you must apply on the device or via the manufacturer tool, illustrates a Syrus Desk script example provided in public materials, and explains practical steps to get the tracker reporting to Plaspy for live tracking and telemetry ingestion.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol when the device connects. Manufacturer side setup steps can vary by firmware, hardware revision, installation type, and vendor tools, so use the guidance here together with the Syrus 3G+ documentation and Syrus Desk when preparing the device.

## Configuration Overview

The goal of configuring a Syrus 3G+ for Plaspy is to point the device to Plaspy's shared endpoint, ensure cellular connectivity and correct APN values, and enable the event and reporting rules that send position and telemetry to the platform. The modelConfiguration script example below demonstrates how Syrus Desk style scripts set APN values and the remote AVL server entry for Plaspy.

- Set the remote server domain or IP to Plaspy and ensure the device is configured to use port 8888.
- Configure the device APN and any APN username and password placeholders required by the SIM.
- Save and load the configuration via Syrus Desk or the manufacturer configuration tool to apply settings to the tracker.
- Enable the time and distance or event reporting rules that control when the device sends updates to the platform.
- Validate connectivity by confirming the device appears in Plaspy and that telemetry is received.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP depending on device requirements
- Plaspy automatically detects the tracker protocol when a device connects and Plaspy uses the same port for all supported devices

## Typical Requirements Before Setup

- An active SIM card with a data plan and the correct APN details for the target mobile operator
- Access to Syrus Desk or another official DCT configuration tool to load scripts or send configuration commands
- The Syrus 3G+ powered and connected so the configuration tool can communicate with the device
- A Plaspy account and an active project where the device will be registered and monitored
- Basic knowledge of the APN placeholders [apn], [apnu], and [apnp] so you can replace them with your operator values when needed
- Backup of any existing configuration if the device is already in service

## How This Tracker Connects to Plaspy

When configured for Plaspy, the Syrus 3G+ reports location and telemetry to Plaspy's shared endpoint and port. Plaspy ingests the incoming device data and maps the payload into platform telemetry for live maps, alerts, and historical reporting. The example Syrus Desk script in this guide shows a practical approach to setting the APN and the remote server address used for Plaspy.

- The device is pointed to d.plaspy.com or 54.85.159.138 and configured to use port 8888
- Transport can be selected as UDP or TCP on the device where required
- Plaspy automatically detects the tracker protocol so devices can connect without custom protocol registration
- The tracker sends position and configured event reports to the Plaspy server for display and processing
- Event triggers and input reports configured on the device become actionable telemetry inside Plaspy

## Common Configuration Workflow

1. Access the official DCT Syrus configuration method such as Syrus Desk or the vendor supplied configuration tool.
2. Prepare or edit a configuration script or template and replace APN placeholders with your operator values if required.
3. Enter the Plaspy server as d.plaspy.com or alternatively 54.85.159.138 in the device server field.
4. Set the device port to 8888 and choose UDP or TCP if the device requires a transport selection.
5. Apply or save the configuration to the Syrus 3G+ and load the script into the device using Syrus Desk.
6. Restart or power cycle the tracker if the tool or firmware requires a reboot to apply settings.
7. Validate that the device reports to Plaspy by checking device presence and telemetry in your Plaspy project.

## Example Configuration Commands

The Syrus 3G+ modelConfiguration example provided as a Syrus Desk script can be saved with a .tmf extension and loaded into Syrus Desk. The commands below are presented in the same order as the public example script. Keep placeholders as shown and replace with real values before loading.

Save as a plain text file with a .tmf extension and load with Syrus Desk:

> Notes on placeholders
> - [apn] is the APN string for your mobile operator
> - [apnu] is the APN username when required
> - [apnp] is the APN password when required

Example Syrus Desk script:

```
# Syrus SB script
# Getting Started example
# Delete any previous configuration
>SRT;CONFIG<
>SXADP**U<
# configuring the APN
>SRFA[apn]<
>SRFI<
>SRFL[apnu]<
>SRFP[apnp]<
# The remote AVL server address and port
>SXADP0000d.plaspy.com;8888<
# A Destination Address holding the server destination
>SDA4;P00<
# Time only Time And Distance signal definition
>STD80300<
# Event triggered by T&D signal
>SED37NV4;TD8+<
# Input report event
>SED05NV4;IP3+<
# end
```

- The command >SRT;CONFIG\< is used to clear prior configuration and can be used as an initial reset step if desired.
- >SRFA[apn]\< sets the APN string. Replace [apn] with your operator APN.
- >SRFL[apnu]\< and >SRFP[apnp]\< set APN username and password when required by the operator.
- >SXADP0000d.plaspy.com;8888\< defines the remote AVL server entry pointing the device to Plaspy and port 8888.
- The signal definitions and event commands such as >STD80300\<, >SED37NV4;TD8+\<, and >SED05NV4;IP3+\< enable reporting rules and event triggers used by the device to send telemetry to Plaspy.

## Configuration Notes

- Firmware and feature availability can vary between Syrus 3G+ hardware revisions and firmware versions. Confirm supported script commands with the device release notes.
- Syrus Desk and the .tmf script workflow are a common manufacturer method for this model. Alternative methods may exist via SMS or other configuration channels depending on firmware and vendor tools.
- Choose UDP or TCP transport based on your installation needs; both are supported for Plaspy on port 8888 and Plaspy will detect the tracker protocol automatically.
- Always verify the server domain entry is exactly d.plaspy.com or the provided IP 54.85.159.138 and that the port is set to 8888 since Plaspy uses the same port across supported devices.
- Keep a copy of the original device configuration before making changes so you can restore previous settings if needed.

## Why Use Plaspy with This Configuration

Using the DCT Syrus 3G+ with Plaspy gives operators a practical path to stream location, event, and sensor telemetry into a single platform for visibility, alerts, and historical reporting. The tracker hardware and Syrus platform tools simplify collecting multi-sensor telemetry while Plaspy ingests and presents that data for fleet oversight, asset protection, and operational analytics.

Learn more about Plaspy and how to integrate devices at https://www.plaspy.com. For the most current device specific configuration details, firmware behavior, and official Syrus documentation consult the manufacturer at https://www.digitalcomtech.com/
