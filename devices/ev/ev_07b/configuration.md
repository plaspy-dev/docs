---
slug: /ev/ev_07b/configuration
id: ev_07b-configuration
sidebar_label: Configuration
title: EV - EV-07B Configuration
sidebar_class_name: menu_item_tracker
description: Public EV EV-07B configuration guide for Plaspy showing server settings SMS commands and setup essentials
keywords:
  - EV EV-07B configuration
  - EV EV-07B setup
  - EV EV-07B server configuration
  - Plaspy tracker configuration
  - personal GPS tracker setup
  - wearable GPS pendant configuration
  - Plaspy server settings
  - SOS pendant configuration
  - EV tracker SMS commands
  - EV EV-07B Plaspy integration
---

# EV - EV-07B Configuration

This page describes the public configuration context for using the Eview EV-07B tracker with Plaspy. It brings together the Plaspy server settings and the known manufacturer SMS commands that are publicly available so you can prepare the device for reporting location and SOS events into the Plaspy platform.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol. Exact manufacturer side setup steps can vary by firmware, hardware revision, installation type, and vendor configuration tools. The EV-07B supports SMS based configuration commands and may require the manufacturer to enable server change options for some firmware builds.

## Configuration Overview

This configuration process prepares the EV-07B to send location, SOS and telemetry data into Plaspy so monitoring teams and authorized contacts get timely visibility. The goal is to configure the device with the Plaspy server endpoint, confirm cellular and APN settings, and validate that the unit reports correctly to Plaspy.

- Configure the device to report to the Plaspy server endpoint and shared port.
- Set or verify APN details so the device can reach Plaspy over the cellular network.
- Apply device timezone and any region specific settings used by the device firmware.
- Enable server change option with the manufacturer if required by firmware.
- Validate reporting in Plaspy so the device appears on the map and sends SOS events.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol and uses the same port for all supported devices

## Typical Requirements Before Setup

- A charged and functional EV-07B device with the correct regional cellular version for your market.
- An active cellular service plan and working SIM so the device can establish data or SMS communications.
- The correct APN settings for the device SIM carrier ready to apply when configuring the tracker.
- Access to the manufacturer SMS command list or the official Eview configuration tool for your device firmware.
- Ability to contact the manufacturer or vendor to enable server change if the device firmware restricts that option.
- A Plaspy account and access to Plaspy support or documentation to validate the device once it begins reporting.

## How This Tracker Connects to Plaspy

When configured, the EV-07B sends location updates, SOS alarms and basic telemetry to the shared Plaspy server endpoint and port so events surface on Plaspy maps, logs, and alerting workflows.

- Device reports location and event messages to d.plaspy.com or directly to IP 54.85.159.138 on port 8888.
- Transport can be UDP or TCP depending on device firmware and configuration; Plaspy detects the protocol automatically.
- SOS button activations and alerts are forwarded into Plaspy for immediate notification and logging.
- Telemetry and status updates such as battery level and connectivity are visible in Plaspy for monitoring and maintenance.

## Common Configuration Workflow

1. Access the official Eview configuration method for the EV-07B such as the SMS command interface or vendor configuration tool.
2. Prepare APN settings for the device carrier and any placeholders like {{apn}}, {{apnu}}, and {{apnp}} if required.
3. Enter the Plaspy server as d.plaspy.com or the server IP 54.85.159.138 in the device server configuration area.
4. Set the port to 8888 as required by Plaspy.
5. Choose UDP or TCP transport if the device requires a transport selection; otherwise rely on Plaspy automatic detection.
6. Apply or save the configuration and restart the device if the firmware requires a reboot to apply changes.
7. Validate that the EV-07B reports to Plaspy by confirming the device appears on the Plaspy map and that test events arrive.

## Example Configuration Commands

The EV-07B supports SMS based setup. The manufacturer provides sample SMS commands. The device default password used in these example commands is 123456. Preserve placeholders such as {{apn}}, {{apnu}}, and {{apnp}} and replace them with your carrier APN values when sending.

1. Set the time zone to UTC 0
```
123456L+00
```

2. Set the operator APN
```
123456S1,{{apn}}
```
If your carrier requires APN username and password, include them as optional fields:
```
123456S1,{{apn}},{{apnu}},{{apnp}}
```
- {{apn}} is the carrier APN.
- {{apnu}} is the APN username if required.
- {{apnp}} is the APN password if required.

3. Set the Plaspy server IP and port
Note: some firmware versions require the manufacturer to enable the ability to change the server address. Contact Eview if the command does not apply.
```
123456I1,54.85.159.138,8888
```
- This command points the device directly to the Plaspy server IP and port. Alternatively configure d.plaspy.com if your device supports domain names.

## Configuration Notes

- Manufacturer firmware and market variants can change command availability and syntax; confirm commands against the Eview documentation for your firmware revision.
- SMS based configuration is supported as shown, but some device batches may require vendor tools or an enabled firmware flag to change the reporting server.
- Choose UDP or TCP based on the device option; Plaspy will automatically detect the protocol once the device begins sending data to port 8888.
- Preserve APN placeholders and verify carrier credentials before sending commands to avoid connectivity loss.
- If server change commands are ignored, contact the vendor to request the server change feature be enabled for your unit.

## Why Use Plaspy with This Configuration

Using the EV-07B with Plaspy gives caregivers, monitoring services and security teams a straightforward way to receive SOS alerts, location updates and telemetry in a single platform. The shared Plaspy server settings and automatic protocol detection make it easier to deploy multiple units without per device port changes, and the EV-07B’s wearable design fits use cases that need immediate personal safety awareness.

To learn more about Plaspy and supported device workflows visit https://www.plaspy.com. For the latest device specific commands, firmware notes, and manufacturer details verify information on the official vendor site http://www.eviewltd.com/ as configuration methods and firmware behavior may change over time.
