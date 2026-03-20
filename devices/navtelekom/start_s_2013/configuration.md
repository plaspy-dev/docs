---
slug: /navtelekom/start_s_2013/configuration
id: start_s_2013-configuration
sidebar_label: Configuration
title: Navtelekom - START S-2013 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for Navtelekom START S-2013 with Plaspy including required server settings and practical setup steps
keywords:
  - Navtelekom START S-2013 configuration
  - START S-2013 setup Plaspy
  - Navtelekom tracker server configuration
  - START S-2013 GPS tracker setup
  - Plaspy tracker configuration
  - GPS platform integration guide
  - vehicle tracking configuration
  - fleet management tracker setup
  - GLONASS GPS tracker configuration
  - tracker connectivity settings
---

# Navtelekom - START S-2013 Configuration

This page documents the public configuration context for using the Navtelekom START S-2013 with Plaspy. It focuses on the practical server settings and integration steps you will typically apply so the device can report GNSS positions and telemetry into the Plaspy platform. This guidance uses publicly available Plaspy endpoint details and explains the typical workflow for applying them on the device using the manufacturer's configuration tools.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol at ingestion. Manufacturer-side configuration steps can vary depending on firmware version, hardware revision, installation type, and the configuration tools provided by Navtelekom. Use this page as a practical reference and consult Navtelekom documentation for device specific dialogs, firmware updates, and advanced telemetry configuration.

## Configuration Overview

This configuration prepares the START S-2013 to send its position and sensor telemetry to Plaspy by pointing the device at Plaspy ingestion endpoints and validating connectivity. The goal is to enable real time visibility, event reporting, and historical tracking in the Plaspy dashboard while using the common server settings Plaspy provides.

- Set the device network endpoint to Plaspy server values so GNSS and telemetry are received by Plaspy.
- Choose the transport type (UDP or TCP) if the device configuration requires it.
- Verify mobile network and SIM data connectivity to allow the tracker to reach Plaspy over 2G GSM.
- Apply and save the configuration in the Navtelekom tool, then confirm the tracker appears in Plaspy.
- Validate telemetry and event reporting from inputs, RS-485, and Bluetooth sensors are forwarded to Plaspy.

## Plaspy Server Settings

Use the following public Plaspy settings when configuring the START S-2013 to report to Plaspy:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport: UDP or TCP may be selected depending on device options
- Plaspy automatically detects the tracker protocol
- Note that all devices in Plaspy use the same port for ingestion

## Typical Requirements Before Setup

- A START S-2013 unit with sufficient battery or vehicle power and optional USB Type-C connection for commissioning.
- A valid SIM card with data enabled and mobile network coverage on the device where 2G GSM is supported.
- Access to the official Navtelekom configuration method or software for the START S-2013.
- A Plaspy account or access to your Plaspy fleet dashboard to verify device reporting after setup.
- Knowledge of the device IMEI or unique identifier so the tracker can be located in Plaspy once it connects.
- Optional tools such as a USB cable for local setup and a serial or vendor utility if required by Navtelekom.

## How This Tracker Connects to Plaspy

The START S-2013 sends GNSS positions and configured telemetry over its 2G GSM link to Plaspy. By directing the device to Plaspy's shared ingestion endpoint and port, the tracker’s messages are received, parsed, and normalized by Plaspy to provide live location, events, and historical playback.

- The tracker is configured to report to d.plaspy.com or 54.85.159.138 on port 8888.
- Plaspy accepts connections over UDP or TCP and will automatically detect the tracker protocol.
- Device telemetry such as discrete inputs, analog readings, RS-485 data, and Bluetooth sensor payloads are forwarded to Plaspy when enabled in the device configuration.
- Events like power loss, input changes, or motion can be reported to Plaspy for alerting and dashboard visualization.
- Once the tracker successfully reaches the Plaspy endpoint, it becomes visible in the Plaspy platform for monitoring and reporting.

## Common Configuration Workflow

Follow a practical sequence when integrating the START S-2013 with Plaspy:

1. Access the official Navtelekom configuration method or software for the START S-2013 (manufacturer tool, USB commissioning utility, or documented configuration channel).
2. Enter the Plaspy server endpoint as either d.plaspy.com or 54.85.159.138 in the device server/host field.
3. Set the device port to 8888. All devices in Plaspy use this same port.
4. Choose UDP or TCP as the transport if the device requires a transport selection.
5. Configure any required APN settings for the SIM if the device requires them for mobile data (use the APN values provided by your mobile carrier).
6. Apply or save the configuration in the Navtelekom tool and restart the device if the tool or firmware requires a reboot to apply changes.
7. Validate that the device reports to Plaspy by checking the Plaspy dashboard for the IMEI or device identifier and confirming recent position and telemetry messages.

## Example Configuration Commands

The START S-2013 configuration method depends on Navtelekom tools and firmware. Because manufacturer tools may use a graphical utility, USB commissioning, or SMS/CLI commands, the exact commands are not provided here. Use the Navtelekom configuration utility or documented procedure to set the server host to d.plaspy.com or 54.85.159.138, set port 8888, and select UDP or TCP as needed.

If you have manufacturer-supplied command examples or an SMS command interface from Navtelekom, apply those commands in the order recommended by Navtelekom and preserve any placeholders such as APN values provided by your mobile operator. For verification, confirm the tracker appears and reports in Plaspy after applying commands and restarting the device if required.

## Configuration Notes

- Firmware and hardware revisions can change configuration dialogs and available options; always check the Navtelekom release notes for device specific behavior.
- TCP and UDP transports may behave differently on mobile networks; if you observe message loss on one transport, try the other and verify results in Plaspy.
- The START S-2013 supports RS-485 and Bluetooth telemetry which may require additional configuration steps in the Navtelekom tool to forward sensor data to Plaspy.
- Use the device IMEI or unique identifier when looking up the unit in Plaspy after configuration to speed verification.
- Consult Navtelekom documentation for details on commissioning with the USB Type-C port or for manufacturer provided configuration utilities.

## Why Use Plaspy with This Configuration

Using the Navtelekom START S-2013 with Plaspy provides a straightforward way to bring compact GLONASS/GPS tracking and telemetry into a centralized fleet platform. The device’s discreet form factor and sensor flexibility make it well suited for light commercial vehicles and asset monitoring, while the shared Plaspy server settings simplify large scale deployments by using the same ingestion port across devices.

To learn more about Plaspy and how it can present START S-2013 telemetry in your fleet dashboard, visit https://www.plaspy.com. For the latest device specific setup steps, firmware notes, and configuration tools, verify current information on Navtelekom’s official site https://www.navtelecom.ru/. Device configuration methods, firmware behavior, and manufacturer details can change over time so consult the manufacturer documentation when applying production configurations.
