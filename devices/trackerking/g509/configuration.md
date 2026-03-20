---
slug: /trackerking/g509/configuration
id: g509-configuration
sidebar_label: Configuration
title: TrackerKing - G509 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for TrackerKing G509 reporting to Plaspy with shared server settings and practical setup guidance
keywords:
  - TrackerKing G509 configuration
  - TrackerKing G509 setup
  - G509 Plaspy configuration
  - G509 server configuration
  - TrackerKing GPS tracker setup
  - G509 tracking platform configuration
  - vehicle tracker Plaspy setup
  - G509 immobilizer configuration
  - TrackerKing G509 integration
  - fleet tracker Plaspy guide
---

# TrackerKing - G509 Configuration

This page documents the public configuration context for using the TrackerKing G509 with the Plaspy platform. It focuses on the practical server settings and workflow required to point a G509 tracker at Plaspy so location updates, alarms, and relay events become visible in the Plaspy dashboards and mobile views. The guidance here is deliberately platform centric and intended to help installers and fleet administrators prepare the device for Plaspy integration.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol so you typically only need to supply a common server endpoint and port on the device. Exact manufacturer side steps for configuring the G509 can vary by firmware, hardware revision, installation type, and the vendor configuration tools used by the installer. Refer to TrackerKing documentation and the device interface you have for the precise configuration screens or commands.

## Configuration Overview

Configuring the G509 for Plaspy prepares the device to deliver live positions, alarms, and history to a centralized fleet platform. The focus is on ensuring the tracker can reach the Plaspy server, that the correct transport and port are selected, and that reporting behavior is validated so vehicles appear in the Plaspy fleet view.

- Point the G509 to the Plaspy server endpoint so it knows where to report GPS and alarm data.
- Choose the transport mode required by the device firmware, UDP or TCP, and set the shared Plaspy port.
- Save and apply the configuration on the G509 using the TrackerKing configuration tool or supported manufacturer method.
- Verify the device reaches Plaspy and that real time positions and events are visible in the platform.
- Test common alarms and relay actions to confirm Plaspy receives and can act on the device events.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol when the device reports to the shared server

All devices in Plaspy use the same port so setting the tracker to report to d.plaspy.com or 54.85.159.138 on port 8888 lets Plaspy accept and auto detect the protocol used by the G509.

## Typical Requirements Before Setup

- The G509 must be powered and physically installed according to TrackerKing wiring guidelines.
- Access to the official TrackerKing configuration method or software for the G509 is required.
- A working data connection or transport path from the device to the internet so the tracker can reach Plaspy.
- Credentials and access to your Plaspy account or fleet instance to verify device visibility after configuration.
- A test plan to exercise GPS reporting and alarm events such as movement, overspeed, geofence, vibration, and power-failure.
- Basic tools for field verification, for example a laptop or phone to view Plaspy while testing.

## How This Tracker Connects to Plaspy

When the G509 is configured to report to Plaspy, the device sends its location and event messages to the shared Plaspy server endpoint and port so fleet operators can monitor and respond in real time. Plaspy ingests those messages, interprets the protocol automatically, and makes the device available in dashboards and reporting tools.

- The G509 reports GPS position updates to d.plaspy.com or 54.85.159.138 on port 8888.
- Alarm events such as movement, overspeed, geofence breach, vibration, and power-failure are forwarded to Plaspy for notification and logging.
- Relay events and remote immobilizer actions can be initiated through Plaspy when the tracker and platform are configured to allow remote control.
- Historical route data and mileage statistics sent by the G509 become available for playback and reporting in Plaspy.
- Plaspy’s automatic protocol detection recognizes the G509 message format once the device sends data to the shared server and port.

## Common Configuration Workflow

1. Access the official TrackerKing configuration method or software for the G509. This may be a web interface, desktop tool, or SMS command method depending on the G509 firmware and installer tools.
2. Enter the Plaspy server address by specifying d.plaspy.com or 54.85.159.138 in the device server field.
3. Set the device to use port 8888, since all devices in Plaspy use the same port.
4. Choose UDP or TCP if the device requires a transport selection; select the option that matches your installer guidance or network constraints.
5. Apply or save the configuration to the device using the manufacturer tool or command method.
6. Restart the G509 if the device firmware requires a reboot to apply network or server changes.
7. Validate that the device reports to Plaspy by checking your Plaspy fleet view for live position updates and testing alarm events on the device.

## Example Configuration Commands

The manufacturer specific commands or configuration screens for the G509 vary by firmware and the configuration method used by the installer. Plaspy requires only that the device point to d.plaspy.com or 54.85.159.138 on port 8888 and use UDP or TCP as the transport when the device asks for it.

If you have TrackerKing provided SMS or CLI commands from the device manual, map the server and port fields to the values above and preserve any required authentication or APN placeholders. Placeholders commonly seen in manufacturer commands might include items such as [apn], [apnu], or [apnp] and should be replaced with your carrier APN settings when required.

## Configuration Notes

- Firmware differences can change the exact configuration interface and the names of fields for server, IP, port, and transport; always check the G509 firmware notes.
- When a device offers both TCP and UDP, choose the transport recommended by your installer or the network conditions in your deployment area; Plaspy accepts either on port 8888.
- Some TrackerKing configuration tools use SMS, serial, or USB methods to set server parameters. Use the official TrackerKing method provided with your unit.
- After changing server settings, allow time for the device to reconnect and for Plaspy to auto detect the protocol before troubleshooting.
- Keep a record of applied settings and firmware version to aid future maintenance and to validate behavior during updates.

## Why Use Plaspy with This Configuration

Using the TrackerKing G509 with Plaspy provides consolidated visibility for vehicle location, alarms, and relay controls in a single platform. For teams managing fleets or protecting high value vehicles, the combined solution makes it straightforward to monitor movement, receive event notifications, review route history, and initiate authorized immobilizer actions when appropriate.

To learn more about Plaspy and how it can integrate with TrackerKing devices visit https://www.plaspy.com. Please verify the latest device specific setup details, firmware instructions, and wiring diagrams on the TrackerKing official site https://trackerking.cn/ because manufacturer setup methods and firmware behavior can change over time.
