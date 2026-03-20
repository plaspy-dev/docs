---
slug: /dct/syrus_satcom_lite/configuration
id: syrus_satcom_lite-configuration
sidebar_label: Configuration
title: DCT - Syrus Satcom Lite Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for DCT Syrus Satcom Lite with Plaspy server and Syrus Desk script examples
keywords:
  - DCT Syrus Satcom Lite configuration
  - Syrus Satcom Lite setup
  - Plaspy configuration
  - satellite GPS tracker setup
  - Syrus Desk script
  - Pegasus IoT Cloud integration
  - GPS tracker server settings
  - remote asset tracking
  - fleet tracking configuration
  - satcom tracker Plaspy
---

# DCT - Syrus Satcom Lite Configuration

This page explains the public configuration context for using the DCT Syrus Satcom Lite with Plaspy. It focuses on the practical steps and server settings you will apply so the device can report location and telemetry to Plaspy for monitoring and alerts. When available, example Syrus Desk script snippets from the manufacturer are included to show a typical setup flow.

Plaspy uses shared server settings for all compatible devices and automatically detects the tracker protocol. Exact manufacturer-side steps can vary by firmware, hardware revision, installation type, and vendor configuration tools such as Syrus Desk. Use the guidance here to prepare the device for Plaspy and refer to manufacturer documentation for device-specific details.

## Configuration Overview

The goal of this configuration process is to prepare the Syrus Satcom Lite to communicate reliably with Plaspy so telemetry and events appear in the platform. Where available, Syrus Desk can load a .tmf script to apply a set of configuration commands in sequence, including APN settings and the remote server definition for Plaspy.

- Load a Syrus Desk compatible .tmf script to apply configuration commands in sequence.
- Configure network access (APN and credentials where applicable) so the device can reach the Plaspy server.
- Set the remote server endpoint to Plaspy and confirm transport selection (UDP or TCP) if required.
- Enable and verify event reporting definitions so movement and input events are forwarded to Plaspy.
- Validate that the device is visible in Plaspy and that location updates and alerts are received.

## Plaspy Server Settings

- Server domain: d.plaspy.com  
- Server IP: 54.85.159.138  
- Port: 8888  
- Transport: device may be configured using UDP or TCP on port 8888  
- Plaspy automatically detects the tracker protocol when the device connects

## Typical Requirements Before Setup

- Access to the official manufacturer configuration tool such as Syrus Desk to load scripts or send commands.  
- A device that is powered and operational with a charged battery for initial configuration.  
- A valid network path (APN and SIM configuration) when required by the device to reach IP endpoints. The example script uses APN placeholders for this purpose.  
- Knowledge of whether your deployment requires UDP or TCP transport so you can select it during configuration if the device asks.  
- The Plaspy server information (d.plaspy.com or 54.85.159.138 and port 8888) ready to enter into the device.  
- Administrative access or credentials required by your installer tools and access to any installation manuals from DCT.

## How This Tracker Connects to Plaspy

The Syrus Satcom Lite is configured to send location and event telemetry to a shared Plaspy server endpoint so Plaspy can ingest and display data alongside other fleet assets. Plaspy uses the same port for all supported devices and will detect the device protocol automatically when the tracker connects.

- The device reports GPS and configured sensor events to d.plaspy.com or the Plaspy IP address on port 8888.  
- Transport can be chosen as UDP or TCP during device configuration; either option uses port 8888.  
- Plaspy ingests position updates, motion events, and any enabled auxiliary reports for mapping and alerting.  
- Once the tracker connects to the Plaspy endpoint, data is available for rules, notifications, and historical reporting in the platform.  
- Plaspy’s automatic protocol detection removes the need to manually select a protocol in many cases, as long as the server endpoint and port are set correctly.

## Common Configuration Workflow

1. Access the official manufacturer configuration method or software (for example Syrus Desk) to prepare a script or apply settings.  
2. Enter the Plaspy server as d.plaspy.com or the IP 54.85.159.138 in the server address field.  
3. Set the destination port to 8888 (Plaspy uses the same port for all devices).  
4. Choose UDP or TCP if the device requires a transport selection during configuration.  
5. Configure APN and any required connectivity credentials using the provided placeholders or your network values.  
6. Apply or save the configuration and load the .tmf file if using Syrus Desk.  
7. Restart the device if required by the firmware or tool.  
8. Validate that the device reports to Plaspy by checking device connection and recent position updates in the platform.

## Example Configuration Commands

The manufacturer provides a sample Syrus SB script that can be saved as a .tmf file and loaded with Syrus Desk. The commands below are presented in the order they appear in the sample. Replace the APN placeholders with your carrier or network values when required.

- Save the following content as a new plain text file with a .tmf extension and load it using Syrus Desk.

```text
# Syrus SB script
# Getting Started example
# Delete any previous configuration
>SRT;CONFIG<
>SXADP**U<
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

Notes on the commands and placeholders:
- {{apn}} is a placeholder for the network APN string your SIM or satellite gateway requires.  
- {{apnu}} and {{apnp}} are placeholders for APN username and password if your network requires authentication.  
- The line starting with SXADP0000 sets the remote server to d.plaspy.com on port 8888. You may instead use the IP 54.85.159.138 if you prefer IP addressing.  
- The SRT;CONFIG< command appears to clear previous configuration; treat it as optional or initial setup when preparing a device. Confirm with manufacturer documentation when to run reset or delete commands.

## Configuration Notes

- Firmware and tool versions can change command syntax or behavior; always confirm script syntax against the Syrus Desk version and device firmware you are using.  
- Choose UDP or TCP according to your installation needs; both are supported by Plaspy on port 8888 but network and satellite links may favor one transport.  
- All devices in Plaspy use the same port (8888) and the platform automatically detects the tracker protocol, so ensure the server address and port are correct first.  
- If you use a .tmf script, verify the file encoding and line endings match Syrus Desk expectations to avoid parsing errors.  
- Keep manufacturer documentation and release notes from DCT handy for details on signal definitions and event definitions included in the sample script.

## Why Use Plaspy with This Configuration

Configuring the DCT Syrus Satcom Lite to report to Plaspy extends real-time visibility to assets operating beyond cellular coverage while keeping fleet and asset telemetry centralized. With the shared Plaspy endpoint and automatic protocol detection, operations teams can consolidate satellite and terrestrial trackers into a single monitoring workflow for alerts, historical reporting, and operational dashboards.

To learn more about Plaspy and how it can integrate satellite enabled trackers like the Syrus Satcom Lite, visit https://www.plaspy.com. For the latest device specific setup details, firmware notes, and full product documentation, verify information on the manufacturer website https://www.digitalcomtech.com/ as methods and device behavior can change over time.
