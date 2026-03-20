---
slug: /topfly/tlp1_sf/configuration
id: tlp1_sf-configuration
sidebar_label: Configuration
title: TopFly - TLP1-SF Configuration
sidebar_class_name: menu_item_tracker
description: Public setup guide and SMS command reference for TopFly TLP1-SF integration with Plaspy server and automatic protocol detection
keywords:
  - TopFly TLP1-SF configuration
  - TopFly TLP1-SF setup
  - TopFly GPS tracker configuration
  - Plaspy compatibility
  - Plaspy server settings
  - GPS tracker setup guide
  - TLP1-SF SMS configuration
  - asset tracker configuration
  - trailer tracker setup
  - solar GPS tracker setup
---

# TopFly - TLP1-SF Configuration

This page covers the public configuration context for using the TopFly TLP1-SF tracker with the Plaspy platform. It summarizes the practical server settings, example SMS configuration commands, and the typical workflow needed to prepare the device so it can report location and events into Plaspy.

Plaspy relies on shared server settings across supported devices and automatically detects the tracker protocol used by the device. Manufacturer side steps can vary by firmware, hardware revision, installation type, and vendor tools, so the information below explains the public setup elements and reproduces the sample SMS commands provided in the TopFly documentation.

## Configuration Overview

The goal of configuration is to prepare the TLP1-SF so it can reliably communicate with Plaspy, upload buffered and real time locations, and report important movement or alarm events to the platform. The public commands and server settings below are the typical starting point for connecting this model with Plaspy.

- Configure the device APN and network parameters so it can use mobile data and GPRS for telemetry.
- Point the device to the Plaspy server endpoint so location data is directed to the platform.
- Set the reporting interval so updates match operational needs and battery considerations.
- Validate that the tracker uploads buffered points and real time updates to Plaspy.
- Use SMS or vendor software to apply settings depending on available tools and access.
- Confirm visibility in Plaspy after configuration by checking incoming messages for the device.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol

These values are the public Plaspy endpoint information to use when configuring the tracker so it can reach the platform. Plaspy uses the same port for all supported devices and detects the protocol automatically.

## Typical Requirements Before Setup

- A charged and powered TLP1-SF tracker with any necessary mounting completed.
- An active SIM card with data enabled and SMS capability when using SMS commands.
- Access to the device default password (TopFly sample default shown below is 0000).
- Access to the official TopFly configuration method such as SMS commands or vendor software.
- Network coverage that supports the device cellular bands for reliable data uploads.
- A clear plan for reporting interval and event rules to avoid unnecessary battery drain.

## How This Tracker Connects to Plaspy

When configured, the TLP1-SF sends its location and status data to Plaspy using the shared server endpoint and port shown earlier. Plaspy receives the incoming packets and maps them to the device record by interpreting the device protocol.

- The tracker is configured to report to the shared Plaspy server endpoint d.plaspy.com or directly to IP 54.85.159.138.
- Data is sent to port 8888 and the device may use UDP or TCP transport as configured.
- Plaspy automatically detects the tracker protocol so the same port can be used across devices.
- Buffered location points stored in the tracker are uploaded when network is available.
- Movement alerts and other event notifications are forwarded to Plaspy for visibility and monitoring.

## Common Configuration Workflow

1. Access the official TopFly configuration method or software (SMS commands, vendor tool, or installer interface).
2. Enter the Plaspy server endpoint by specifying either d.plaspy.com or 54.85.159.138 in the server settings.
3. Set the device port to 8888 as the telemetry destination.
4. Choose UDP or TCP transport if the device requires selection for the connection.
5. Configure the APN and any APN credentials required by your mobile operator.
6. Apply or save the configuration and restart the device if the tracker requires a reboot for changes to take effect.
7. Validate that the device reports to Plaspy by checking the device in the platform for incoming data and recent location updates.

If you prefer SMS configuration, follow the manufacturer SMS commands below as an alternative to vendor software, keeping the order and placeholders as required.

## Example Configuration Commands

TopFly provides public SMS commands to apply basic settings on the TLP1-SF. The sample commands below use the device default password 0000 and must be sent as SMS messages to the device. Keep placeholders intact where indicated.

1. Set the time zone to UTC 0
```
GMT,0000,0#
```

2. Set the APN and optional APN username and password
```
APN,0000,{{apn}},{{apnu}},{{apnp}}#
```
- {{apn}} is the operator APN string.
- {{apnu}} is the APN username if required, otherwise leave blank.
- {{apnp}} is the APN password if required, otherwise leave blank.

3. Set the GPRS server to the Plaspy IP and port
```
IP,0000,54.85.159.138 8888#
```
- This command points the tracker to Plaspy using the public IP and port 8888.
- You may use d.plaspy.com in place of the IP if the device supports domain names.

4. Set the upload/report interval to 60 seconds
```
TIMER,0000,60:60:0:0#
```
- The TIMER format is device specific; this example follows the manufacturer sample for a 60 second reporting interval.
- Preserve the command order when performing initial setup.

These commands are the publicly published SMS examples from TopFly for initial configuration. Replace placeholders with your operator values and confirm password usage matches the device state. If you change the device password, use the new password in subsequent commands.

## Configuration Notes

- The sample SMS commands use the factory default password 0000 as shown in the public TopFly documentation. Change the password where possible and update future commands accordingly.
- Firmware versions and hardware revisions can change command syntax or supported features. Confirm the exact command format for your device firmware.
- Choose UDP or TCP based on your deployment preferences and network behavior; Plaspy supports both and will auto-detect the protocol.
- SMS based setup is practical in the field, but vendor configuration tools may offer a faster bulk provisioning workflow.
- Plaspy uses the same port for all devices and automatically detects the protocol so the server port 8888 is universal across configured trackers.

## Why Use Plaspy with This Configuration

Using Plaspy with the TopFly TLP1-SF provides a straightforward way to centralize tracking data from solar powered asset trackers and to take advantage of the platform's automatic protocol detection and shared server endpoint. The public settings and SMS commands shown here let installers and administrators point devices to Plaspy and begin receiving buffered and real time location updates.

To learn more about Plaspy and platform features visit https://www.plaspy.com. For device specific firmware behavior, full command references, and the latest manufacturer instructions verify details on the TopFly website https://www.topflytech.com/ as vendor documentation can change over time.
