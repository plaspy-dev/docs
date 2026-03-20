---
slug: /cantrack/yg119/configuration
id: yg119-configuration
sidebar_label: Configuration
title: CanTrack - YG119 Configuration
sidebar_class_name: menu_item_tracker
description: Public guide to configure CanTrack YG119 for use with Plaspy including required server settings and practical setup steps
keywords:
- CanTrack YG119 configuration
- YG119 setup for Plaspy
- CanTrack tracker Plaspy
- YG119 server configuration
- CanTrack YG119 GPS tracker setup
- YG119 tracking software configuration
- CanTrack YG119 platform setup
- CanTrack configuration guide
- YG119 installation guide
- Plaspy tracker integration
---

# CanTrack - YG119 Configuration

This page covers the public configuration context for using the CanTrack YG119 tracker with Plaspy. It focuses on the practical server settings and high level setup steps needed to point the device to the Plaspy ingestion endpoint so that position uploads and device events appear in the Plaspy platform.

Plaspy uses a shared server endpoint and consistent port across supported devices and automatically detects the tracker protocol. Manufacturer side setup steps can vary by firmware version, hardware revision, installation type, and vendor configuration tools, so use this guide together with CanTrack documentation for device specific instructions.

## Configuration Overview

Preparing a YG119 for Plaspy is primarily about configuring the device to report to the shared Plaspy server endpoint and verifying that the tracker is reaching the platform. The following items describe the practical goals of the configuration process.

- Configure the device to send TCP or UDP packets to Plaspy so position and event data are received in real time.
- Ensure the tracker has active cellular connectivity and a working SIM so uploads can reach the Plaspy server.
- Validate connectivity and event reporting so the tracker appears in Plaspy maps and logs.
- Enable the desired reporting mode on the device such as movement-triggered or interval reporting to balance timeliness and battery life.
- Confirm alerts such as geo-fence triggers, low battery, remote voice listen, and buzzer events are forwarded to Plaspy.

## Plaspy Server Settings

Use the following public Plaspy settings when configuring the YG119 or when entering server details in the manufacturer tool:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP; the device may be configured using either UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol so all devices use the same port and Plaspy will interpret incoming packets

## Typical Requirements Before Setup

- Ensure the YG119 battery is charged and the device is powered on.
- Install a standard active SIM with a data plan if required by the regional cellular variant.
- Verify the device has cellular coverage in the expected operating area.
- Have access to the CanTrack configuration method provided for this model such as their software, web tool, or configuration channel.
- Know the desired reporting mode and any event thresholds you want to enable before applying settings.
- Have access to Plaspy account information to validate the device once it begins reporting.

## How This Tracker Connects to Plaspy

The YG119 uploads position and status data over the device cellular connection to the Plaspy ingestion endpoint. Once pointed to the shared Plaspy endpoint and port, uploaded packets are automatically detected and parsed by Plaspy for real time display and alerting.

- The tracker sends TCP/IP or UDP packets to d.plaspy.com or 54.85.159.138 on port 8888.
- Plaspy ingests position updates and maps them into live tracking sessions.
- Alerts such as geo-fence events, low battery warnings, and movement-triggered reports are forwarded to Plaspy for notification and history.
- Remote voice listen and audible buzzer activations are captured as events and recorded in Plaspy history when supported by the device.
- Plaspy’s automatic protocol detection removes the need to select a protocol on the server side; the device is configured to the shared endpoint and Plaspy interprets the incoming data.

## Common Configuration Workflow

1. Access the official CanTrack configuration method or software for the YG119 provided by the manufacturer or vendor.
2. Confirm the device has a valid SIM installed, network registration, and power.
3. Enter the Plaspy server address either as the domain d.plaspy.com or as the server IP 54.85.159.138 according to the manufacturer tool.
4. Set the server port to 8888 as this is the shared port used by Plaspy for all supported devices.
5. Choose UDP or TCP if the device requires a transport selection when configuring the server endpoint.
6. Apply or save the configuration within the device tool and follow any device prompts to confirm changes.
7. Restart the device if the manufacturer workflow requires a reboot to apply network settings.
8. Validate that the device reports to Plaspy by checking live position updates, event logs, or test reports in your Plaspy account.

## Example Configuration Commands

The YG119 model configuration commands vary by CanTrack firmware and the vendor configuration method. Because manufacturer tools and command formats differ across firmware revisions, the exact command syntax is not provided here. Use the official CanTrack configuration utility or the device manual to apply the following public server settings:

- Point the device to d.plaspy.com or 54.85.159.138
- Use port 8888
- Select UDP or TCP if required

If you receive manufacturer supplied command examples from CanTrack that include placeholders such as {{apn}}, {{apnu}}, or {{apnp}}, keep those placeholders when issuing commands and replace them with your mobile carrier APN settings. Consult the CanTrack documentation for command examples appropriate to your firmware.

## Configuration Notes

- Firmware and hardware revisions may use different configuration interfaces or command formats; always check the CanTrack YG119 manual for your specific revision.
- Choosing TCP or UDP can affect delivery behavior; select the transport required or recommended by the vendor tool and consider testing both if connectivity issues arise.
- Regional variants of the YG119 may have different cellular bands or modem firmware; verify that your device variant is functional on local networks before deployment.
- Plaspy uses the same port for all devices and automatically detects incoming protocols, so focus on pointing the device to d.plaspy.com or 54.85.159.138 with port 8888.
- Installer practices such as confirming signal strength, enabling movement or interval reporting, and validating event notifications will reduce deployment issues.

## Why Use Plaspy with This Configuration

Using the CanTrack YG119 with Plaspy provides a practical, low friction way to turn the device’s movement reports, geo-fence alerts, and recovery aids into actionable telemetry and notifications. For handlers and owners who need reliable real time tracking and historical location data, configuring the YG119 to point at Plaspy delivers visibility and faster recovery workflows.

To learn more about Plaspy and platform capabilities visit https://www.plaspy.com. Device specific configuration methods, firmware behavior, and manufacturer details can change over time, so verify the latest YG119 setup instructions and technical specifications at the official CanTrack site https://www.cantrackgps.com/ before deployment.
