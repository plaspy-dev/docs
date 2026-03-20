---
slug: /istartek/vt130_l/configuration
id: vt130_l-configuration
sidebar_label: Configuration
title: iStartek - VT130-L Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for iStartek VT130-L with Plaspy compatible server settings and SMS command examples
keywords:
  - iStartek VT130-L configuration
  - VT130-L Plaspy setup
  - iStartek tracking configuration
  - VT130-L server configuration
  - Plaspy GPS tracker settings
  - VT130-L SMS commands
  - vehicle tracking setup
  - GNSS tracker configuration
  - Plaspy compatible devices
  - VT130-L APN setup
---

# iStartek - VT130-L Configuration

This page documents the public configuration context for using the iStartek VT130-L tracker with Plaspy. It explains the shared server values Plaspy requires, outlines a practical workflow for preparing the VT130-L, and includes the manufacturer provided SMS commands that are commonly used to point the device to Plaspy servers.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol. Exact manufacturer side setup steps can vary depending on VT130-L firmware version, hardware revision, installation type, and vendor tools. The VT130-L supports SMS based configuration and GPRS APN settings, and the examples below use the publicly available SMS commands supplied by iStartek.

## Configuration Overview

The primary goal of configuring the VT130-L for Plaspy is to prepare the device to reliably send GNSS and telemetry data to the platform so vehicles appear and update in real time. Configuration focuses on server targeting, APN and network credentials, reporting cadence, and verifying that the tracker successfully registers with Plaspy.

- Point the VT130-L to Plaspy server settings so data is routed to your Plaspy account.
- Configure APN and GPRS parameters so the device can use the cellular data network.
- Set the reporting interval to match your monitoring and bandwidth needs.
- Validate device connectivity and confirm the device appears in Plaspy.
- Optionally reset to factory defaults during initial provisioning for a known starting state.

## Plaspy Server Settings

- Server domain d.plaspy.com for DNS based configuration
- Server IP 54.85.159.138 as a direct IP option
- Port 8888 which Plaspy uses for all supported devices
- Transport support for UDP or TCP depending on device selection
- Plaspy automatically detects the tracker protocol after the device connects

Note that Plaspy uses the same port 8888 for all devices and the platform will auto detect the tracker protocol once a device begins sending data.

## Typical Requirements Before Setup

- A powered VT130-L with access to the unit for SMS or local configuration
- An active SIM card with cellular data and SMS capability and a valid APN
- Manufacturer configuration access method such as SMS commands or vendor tool
- Basic knowledge of the device IMEI and how to receive confirmation messages
- Access to Plaspy account credentials or device registration instructions for final validation

## How This Tracker Connects to Plaspy

When the VT130-L is configured, it sends GNSS and device status packets to the Plaspy server endpoint at d.plaspy.com or directly to 54.85.159.138 on port 8888. Plaspy receives the data, detects the device protocol automatically, and maps the incoming telemetry into live tracking and alerting functions.

- Device reports are sent to d.plaspy.com or 54.85.159.138 on port 8888
- Choose UDP or TCP on the device if transport selection is required
- Plaspy auto detects the protocol and processes incoming telemetry
- Alarms and digital input events are forwarded into Plaspy alerting pipelines
- Regular position updates and timer based reports enable live visibility in the platform

## Common Configuration Workflow

1. Access the official manufacturer configuration method or software, for example SMS commands documented by iStartek or the vendor tool.
2. Enter the Plaspy server hostname d.plaspy.com or the direct server IP 54.85.159.138 into the device server settings.
3. Set the device port to 8888, noting that Plaspy uses this same port for all supported devices.
4. Choose UDP or TCP as the transport if the VT130-L requires an explicit transport selection.
5. Configure the APN and any required APN username or password for cellular data connectivity.
6. Apply or save the configuration and restart the device if the firmware requires a reboot to apply settings.
7. Validate that the device reports to Plaspy by checking the platform for incoming telemetry or using the device verification command.

## Example Configuration Commands

The VT130-L supports SMS based configuration. Below are the public SMS commands provided by the manufacturer. Preserve placeholders when substituting your network values.

1. Optional initial factory reset (use only when needed)
```
FACTORY#
```

2. Set the time zone to UTC 0
```
GMT,E,0#
```

3. Set the operator APN
- Basic APN only
```
APN,{{apn}}#
```
- APN with username and password if required
```
APN,{{apn}},{{apnu}},{{apnp}}#
```
Explanation: {{apn}} is the cellular operator APN. {{apnu}} and {{apnp}} are optional APN username and password placeholders.

4. Set the GPRS server using DNS name (preferred)
```
SERVER,1,d.plaspy.com,8888#
```

5. Or set the GPRS server using direct IP
```
SERVER,0,54.85.159.138,8888#
```

6. Set the location update interval to every 60 seconds
```
TIMER,60#
```

7. Verify current parameter settings
```
PARAM#
```

Send each SMS to the VT130-L from an authorized phone number according to the device provisioning rules in your installer documentation. Keep the command order when performing an initial setup to ensure network and server settings are applied before reporting begins.

## Configuration Notes

- Firmware versions and regional hardware revisions can change supported commands and parameter names; verify commands against the VT130-L firmware release you have.
- The VT130-L supports SMS command configuration in the examples above, but vendor tools or USB configuration utilities may also be available.
- Choose TCP or UDP according to your network needs and the device firmware support; Plaspy will accept either transport and auto detect protocol.
- Because Plaspy uses port 8888 for all devices, you only need to set that single port when targeting the platform.
- When using direct IP versus domain name, DNS based settings allow future server IP changes without updating device configurations.

## Why Use Plaspy with This Configuration

Configuring the VT130-L to report to Plaspy provides unified, real time visibility into vehicle location and telemetry across mixed fleets. With the VT130-L streaming GNSS position, event alarms and status data to the shared Plaspy endpoint, operators can use live mapping, alerts, and analytics to improve dispatch, safety, and asset protection workflows.

Learn more about Plaspy at https://www.plaspy.com and verify the latest device specific instructions and firmware behavior with the manufacturer at https://istartek.com/ since setup methods and firmware details can change over time.
