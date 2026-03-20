---
slug: /goome/gm02g/configuration
id: gm02g-configuration
sidebar_label: Configuration
title: Goome - GM02G Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for Goome GM02G showing Plaspy server settings SMS commands and practical setup guidance
keywords:
  - Goome GM02G configuration
  - Goome GM02G setup
  - Goome GM02G Plaspy
  - GM02G server configuration
  - GM02G SMS setup
  - Goome GPS tracker configuration
  - vehicle tracking GM02G
  - GM02G platform setup
  - Plaspy tracker configuration
  - GPS tracker GM02G
---

# Goome - GM02G Configuration

This page covers the public configuration context for using the Goome GM02G tracker with the Plaspy platform. It explains the shared server settings Plaspy expects and summarizes the practical, manufacturer-side steps you can use to point a GM02G tracker at Plaspy so the device reports into the platform.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while exact manufacturer-side setup steps can vary by firmware version, hardware revision, installation type, and vendor tools. The GM02G supports SMS-based configuration in its public documentation; this guide incorporates those public SMS commands and shows how to use them with Plaspy server values.

## Configuration Overview

The goal of this configuration process is to prepare a Goome GM02G to communicate reliably with Plaspy so the device becomes visible and reportable in the fleet platform. For GM02G devices, the public configuration path often uses SMS commands to set APN and GPRS server details, then validates connectivity.

- Configure the device APN and GPRS server so the tracker can establish data connectivity.
- Point the tracker to the Plaspy server endpoint so reports arrive in your Plaspy account.
- Set reporting interval or timer values to control update frequency and motion reporting.
- Verify settings and device status using the tracker verification commands.
- Confirm the device appears and reports correctly in Plaspy after configuration.

## Plaspy Server Settings

Use the following public Plaspy server settings when configuring the GM02G:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP (the device may be configured using either UDP or TCP on port 8888)
- Plaspy automatically detects the tracker protocol and all devices use the same port

## Typical Requirements Before Setup

- Vehicle or bench power connected so the GM02G is powered during configuration.
- An active SIM card with data and SMS capability inserted into the tracker.
- Operator APN information and optional APN username and password if required by the mobile operator.
- Access to an SMS-capable phone or SMS gateway to send configuration commands to the tracker.
- Physical access to the tracker for installation verification and any required restarts.
- Manufacturer documentation or vendor tool access for any model-specific configuration steps.

## How This Tracker Connects to Plaspy

The GM02G is configured to report location and device status to the shared Plaspy server endpoint and port. Once the device has a working GPRS connection and the correct server settings, it sends periodic or motion-triggered reports so the vehicle is visible on Plaspy.

- The tracker uses the configured APN to open GPRS data and reach Plaspy.
- It sends position and status packets to the Plaspy server address at port 8888.
- Reports can be sent on a timer or when motion is detected according to the device configuration.
- Plaspy receives those packets and automatically detects the tracker protocol for parsing.
- After successful setup, the device will appear and report events in the Plaspy platform.

## Common Configuration Workflow

1. Access the official Goome configuration method for the GM02G (SMS commands are supported by the device and are used in the public setup examples).
2. Enter the Plaspy server domain d.plaspy.com or the Plaspy server IP 54.85.159.138 in the device server setting.
3. Set the server port to 8888 (all Plaspy devices use the same port).
4. Choose the transport protocol UDP or TCP if the device requires a transport selection.
5. Apply or save the configuration on the device and send any necessary confirmation commands.
6. Restart the device or power cycle if required by the manufacturer or after a configuration change.
7. Validate that the device reports to Plaspy and is visible in the platform.

## Example Configuration Commands

The GM02G supports SMS-based configuration. The following public SMS commands are presented in the order recommended for initial setup. Label any reset step as optional only when needed.

- Optional initial factory reset (use only if you need to clear previous settings):
```text
FACTORY#
```

- Set the operator APN. Replace the placeholders with your operator values. {{apn}} is required. {{apnu}} and {{apnp}} are optional username and password fields if your operator requires them:
```text
APN,{{apn}},{{apnu}},{{apnp}}#
```
Example explanation: If your APN is internet, send APN,internet# or include credentials when needed.

- Set the GPRS server to Plaspy using the public IP and port. This points the device to report to Plaspy:
```text
GPRSSET,54.85.159.138,8888#
```
You may alternatively enter the server domain in manufacturer tools if they accept a hostname (d.plaspy.com), but the public SMS command example uses the IP.

- Set the update interval to send position reports every 60 seconds:
```text
TIMER,60#
```

Verification commands available in public documentation:

- Check the GPRS server settings configured on the device:
```text
GPRSSET#
```

- Request the device status to verify connectivity and operational state:
```text
STATUS#
```

## Configuration Notes

- SMS-based configuration is a common public method for the GM02G; commands and syntax can vary by firmware version or vendor customization.
- If the device or vendor tool supports hostnames, you can use d.plaspy.com instead of the IP address; the public SMS example uses the IP address 54.85.159.138.
- Choose UDP or TCP according to installation needs; Plaspy supports both transports on port 8888 and will auto-detect the tracker protocol.
- Preserve APN placeholders exactly as provided: {{apn}} for the operator APN, {{apnu}} for APN username, and {{apnp}} for APN password.
- After saving settings, a power cycle or restart may be necessary for some firmware versions to apply changes.

## Why Use Plaspy with This Configuration

Configuring a Goome GM02G to report to Plaspy gives organizations a straightforward way to add compact, discreet vehicle trackers into a centralized fleet visibility and monitoring platform. Using the shared Plaspy server settings simplifies large deployments because all supported devices use the same port and Plaspy automatically detects the protocol, reducing per-device configuration complexity.

To learn more about Plaspy and supported integrations visit https://www.plaspy.com. Please verify the most current device-specific configuration methods and firmware details with the manufacturer at http://www.goomegpstracker.com because manufacturer specifications and setup behavior can change over time.
