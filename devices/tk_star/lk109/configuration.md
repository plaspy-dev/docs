---
slug: /tk_star/lk109/configuration
id: lk109-configuration
sidebar_label: Configuration
title: TK-Star - LK109 Configuration
sidebar_class_name: menu_item_tracker
description: Public setup guide for TK-Star LK109 configuration with Plaspy server settings and example SMS commands
keywords:
  - TK-Star LK109 configuration
  - TK-Star LK109 setup
  - LK109 Plaspy setup
  - LK109 server configuration
  - TK-Star GPS tracker configuration
  - GPS tracker LK109 setup
  - Plaspy tracker configuration
  - vehicle tracking LK109
  - GPS tracking platform setup
  - TK-Star LK109 SMS commands
---

# TK-Star - LK109 Configuration

This page describes the public configuration context for using the TK-Star LK109 tracker with Plaspy. It focuses on the practical server settings, common workflow, and example SMS commands that are publicly available to prepare the device to report location and status to the Plaspy platform.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol. Exact manufacturer-side steps can vary by firmware version, hardware revision, installation environment, and vendor tools; this guide uses the publicly available LK109 configuration commands where present and centers on the shared Plaspy endpoint required to integrate the tracker.

## Configuration Overview

The goal of this configuration is to prepare the LK109 so it can establish a GPRS connection and send tracking data to Plaspy reliably. The public commands for the LK109 primarily use SMS to set APN, server, reporting interval, and operating mode so the device can communicate with the Plaspy server.

- Point the tracker to the Plaspy server endpoint and port so it can deliver location updates.
- Configure the device APN and any necessary credentials so GPRS data is available.
- Set a reporting interval suitable for your monitoring needs and power budget.
- Ensure the device is set to GPRS mode so it transmits to Plaspy rather than a local or legacy endpoint.
- Validate connectivity and confirm the tracker appears in Plaspy once configured.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol and all devices in Plaspy use the same port

## Typical Requirements Before Setup

- A charged and operational LK109 with access to SMS for configuration
- An active SIM card with data and SMS enabled, and correct APN credentials from the mobile operator
- A mobile phone or tool capable of sending SMS configuration commands to the tracker
- The device default password if required for configuration (public commands below use the default password 123456)
- Access to manufacturer documentation and any vendor tools for firmware-specific instructions
- A Plaspy account or access to the Plaspy platform to validate the device appears after configuration

## How This Tracker Connects to Plaspy

The LK109 is configured to send its location and status to Plaspy by setting the device GPRS server information to the Plaspy endpoint and ensuring the device uses GPRS mode. Once configured, the tracker transmits periodic updates which Plaspy receives on the shared server port and shows in the platform.

- The tracker sends GPRS data to the configured Plaspy endpoint 54.85.159.138 on port 8888
- Plaspy accepts connections on port 8888 and supports both UDP and TCP transports
- Plaspy automatically detects the tracker protocol so the platform interprets incoming messages from the LK109
- Reporting interval settings control how often the device uploads location to Plaspy
- After successful configuration and a data connection, the tracker becomes visible in Plaspy for real time monitoring and history trace checks

## Common Configuration Workflow

1. Access the official manufacturer configuration method or software, or prepare to use SMS commands as provided by TK-Star.
2. Enter the Plaspy server address either by domain d.plaspy.com or by IP 54.85.159.138 depending on the device configuration option available.
3. Set the port to 8888 as Plaspy uses the same port for all supported devices.
4. Choose UDP or TCP transport if the device requires an explicit transport selection.
5. Configure APN and any APN username or password required by the mobile operator.
6. Apply or save the configuration and switch the tracker to GPRS mode if required.
7. Restart the device if the device or manufacturer documentation recommends it.
8. Validate that the tracker reports to Plaspy and is visible in the platform.

## Example Configuration Commands

The LK109 can be configured using SMS commands. The following commands are taken from publicly available LK109 configuration instructions. The device password used in these examples is 123456 which is the default password in the public commands.

- Optional initial factory restore (use only if you need to reset the device):
```sms
begin123456
```

- Set the operator APN (replace {{apn}} with your operator APN):
```sms
apn123456 {{apn}}
```

- Set the APN username if required by your operator (replace {{apnu}} with the APN user):
```sms
apnuser123456 {{apnu}}
```

- Set the APN password if required by your operator (replace {{apnp}} with the APN password):
```sms
apnpasswd123456 {{apnp}}
```

- Set the GPRS server to the Plaspy server IP and port (this example uses the public Plaspy IP and port):
```sms
adminip123456 54.85.159.138 8888
```

- Set the upload interval to 60 seconds (adjust the number for a different reporting frequency):
```sms
upload123456 60
```

- Switch the tracker to GPRS mode so it uses data reporting:
```sms
gprs123456
```

Notes on placeholders:
- {{apn}} is the mobile operator APN string required for data access.
- {{apnu}} and {{apnp}} are optional APN username and password fields used if your operator requires them.
- The examples above use the default device password 123456; if you have changed the device password, replace 123456 with your device password in each command.

## Configuration Notes

- SMS based setup is the public method shown for the LK109; some installers may prefer a configuration tool if provided by TK-Star or a distributor.
- Firmware and hardware revisions can change available commands and behavior; check manufacturer documentation if a command does not work as expected.
- Choose UDP or TCP according to device options and network conditions; Plaspy accepts both but some networks or devices may work better with one transport.
- Plaspy uses the same port 8888 for all devices and automatically detects tracker protocols, so focus on correct server address and APN when configuring the device.
- If you use the server domain instead of the IP, verify the device accepts domain names for the adminip or equivalent command; the public LK109 example uses the Plaspy IP.

## Why Use Plaspy with This Configuration

Using the LK109 with Plaspy lets organizations centralize tracking data for improved visibility, operational monitoring, and historical trace. By configuring APN, server, and reporting interval as shown, the LK109 can send consistent location updates to Plaspy so fleet managers and administrators can monitor movement, receive alerts, and review history within a single platform.

To learn more about Plaspy and how it can manage trackers like the LK109 visit https://www.plaspy.com. For the latest device specific commands, firmware notes, and manufacturer guidance please verify details with the official TK-Star documentation at https://www.tk-star.com/.
