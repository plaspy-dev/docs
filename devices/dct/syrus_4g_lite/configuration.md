---
slug: /dct/syrus_4g_lite/configuration
id: syrus_4g_lite-configuration
sidebar_label: Configuration
title: DCT - Syrus 4G Lite Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for DCT Syrus 4G Lite compatibility with Plaspy including server settings and example Syrus Desk script
keywords:
  - DCT Syrus 4G Lite configuration
  - Syrus 4G Lite setup
  - Plaspy tracker configuration
  - GPS tracker configuration DCT
  - Syrus Desk script
  - Syrus 4G Lite server settings
  - fleet tracking setup
  - telematics gateway configuration
  - Syruslang examples
  - Plaspy server settings
---

# DCT - Syrus 4G Lite Configuration

This page documents the public configuration context for using the DCT Syrus 4G Lite with Plaspy. It gathers the practical server settings, a typical workflow, and an example Syrus Desk script that operators commonly use to point a Syrus 4G Lite to the Plaspy server for real time tracking and telemetry ingestion.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol. Exact steps on the device side can vary by firmware version, hardware revision, installer method and the vendor tools you use such as Syrus Desk. Use the guidance below together with manufacturer documentation for device specific details.

## Configuration Overview

The goal of configuration is to prepare the Syrus 4G Lite so it reliably connects to Plaspy and reports GNSS, telemetry and event data for platform visibility. The example Syrus SB script shown later is a practical starting point you can load with Syrus Desk to set APN values and the remote server target.

- Configure cellular APN parameters so the device has mobile data connectivity.
- Set the remote server endpoint to the Plaspy server and the correct port.
- Select the transport mode required by your installation, UDP or TCP.
- Apply and save the device profile, then restart or reconnect to validate reporting.
- Verify the device appears and sends data in Plaspy so dashboards and alerts reflect live telemetry.

## Plaspy Server Settings

- server domain d.plaspy.com
- server IP 54.85.159.138
- port 8888
- transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol and uses the same port for all supported devices

## Typical Requirements Before Setup

- A powered Syrus 4G Lite with antennas and internal battery installed and charged.
- An active cellular SIM with a data plan and the correct APN for your carrier.
- Access to the official manufacturer configuration tool such as Syrus Desk to load scripts or device profiles.
- A Plaspy account or tenant ready to receive device data and verify reporting.
- Latest recommended firmware or at least confirmation of firmware that supports the applied script and features.
- A test process to confirm network connectivity and that the device appears in Plaspy after configuration.

## How This Tracker Connects to Plaspy

The Syrus 4G Lite is configured to open a connection toward the Plaspy server endpoint and send GNSS positions, device health and configured event messages. Once the device has mobile data and the remote server and port are set, Plaspy ingests telemetry for real time tracking and historical reporting.

- The device sends position and telemetry to d.plaspy.com on port 8888 or to the server IP 54.85.159.138 on port 8888.
- Transport can be UDP or TCP depending on the device configuration and installer preference.
- Plaspy automatically detects the tracker protocol so the device can use its native Syrus protocol framing.
- Event triggers and input reports defined on the device are forwarded to Plaspy for alerts and dashboarding.
- After successful configuration, device status and movement are visible in Plaspy for monitoring and diagnostics.

## Common Configuration Workflow

1. Access the official manufacturer configuration method or software such as Syrus Desk.
2. Prepare or create a new empty script file for the Syrus SB script format or use the Syrus Desk profile editor.
3. Enter the Plaspy server as d.plaspy.com or use the server IP 54.85.159.138 and set the port to 8888.
4. Choose UDP or TCP if the device requires a transport selection for the remote server.
5. Configure the carrier APN and any APN credentials required by your SIM.
6. Apply or save the configuration, load the script or profile into the device, and restart the device if required.
7. Validate that the Syrus 4G Lite reports to Plaspy and that positions and events are visible in the platform.

## Example Configuration Commands

The Syrus 4G Lite accepts Syrus SB script files that can be loaded with Syrus Desk. Below is an example script adapted from a public Syrus SB example. Save this content as a plain text file with a .tmf extension and load it into Syrus Desk for the device.

- The script includes an optional initial delete or reset step to clear previous configuration.
- Placeholders [apn], [apnu], and [apnp] must be replaced with your carrier APN, APN username, and APN password as needed. If no username or password is required, leave the corresponding placeholder empty.

Example Syrus SB script for Syrus Desk:

#Syrus SB script
#Getting Started example
#Delete any previous configuration
>SRT;CONFIG\<
>SXADP**U\<
#configuring the APN
>SRFA[apn]\<
>SRFI\<
>SRFL[apnu]\<
>SRFP[apnp]\<
#The remote AVL server address and port
>SXADP0000d.plaspy.com;8888\<
#A Destination Address holding the server destination
>SDA4;P00\<
#Time-only Time And Distance signal definition
>STD80300\<
#Event triggered by T&D signal
>SED37NV4;TD8+\<
#Input report event
>SED05NV4;IP3+\<
#end

For clarity, the same server endpoint may be specified by IP where your workflow prefers numeric addressing. Plaspy accepts connections to 54.85.159.138 on port 8888 as an alternative to d.plaspy.com.

## Configuration Notes

- The exact command syntax and available script directives depend on Syrus firmware and Syrus Desk versions; verify compatibility before mass deployment.
- Choose TCP or UDP according to your installation needs; both are supported by Plaspy on port 8888 and the platform will automatically detect the protocol used by the tracker.
- Replace [apn], [apnu] and [apnp] with carrier specific values. If the APN credentials are not required, leave username and password blank.
- Loading a .tmf file via Syrus Desk is a common method for bulk provisioning and for applying consistent profiles across many devices.
- Always confirm after configuration that the device reports to Plaspy and that events and positions appear as expected in the platform.

## Why Use Plaspy with This Configuration

Configuring the Syrus 4G Lite to report to Plaspy provides a reliable path for real time fleet monitoring, remote diagnostics and event driven alerts. The device’s rugged hardware, built in GNSS and blackbox capabilities combined with Plaspy’s telemetry ingestion let operations teams monitor location, device health and incident logs in a single platform.

To learn more about Plaspy, visit https://www.plaspy.com. For the latest device specific configuration notes, firmware details and Syrus Desk guidance, verify current information on the manufacturer website https://www.digitalcomtech.com/ as vendor procedures and firmware behavior can change over time.
