---
slug: /concox/tr06/configuration
id: tr06-configuration
sidebar_label: Configuration
title: Concox - TR06 Configuration
sidebar_class_name: menu_item_tracker
description: Configure Concox TR06 for use with Plaspy using public server settings and SMS commands
keywords:
  - Concox TR06 configuration
  - Concox TR06 setup
  - TR06 server configuration
  - TR06 Plaspy setup
  - Concox GPS tracker setup
  - TR06 SMS commands
  - vehicle tracking TR06
  - fleet management TR06
  - Plaspy GPS compatibility
  - TR06 GPRS configuration
---

# Concox - TR06 Configuration

This page covers the public configuration context for using the Concox TR06 tracker with Plaspy. It provides the practical server settings and example SMS commands that are commonly used to point a TR06 device at Plaspy so the device can report location and status to the platform.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while exact manufacturer side setup steps can vary by firmware release, hardware revision, installation type, and vendor tools. The TR06 supports SMS and GPRS based configuration in its public documentation, and this page shows the public commands and workflow used to integrate a TR06 with Plaspy.

## Configuration Overview

The goal of the configuration process is to prepare a TR06 tracker so it reliably communicates with Plaspy and is visible in your Plaspy account. Using the public SMS commands for TR06 or the manufacturer configuration method you can set APN parameters, the Plaspy server, reporting intervals, and enable GPRS so the device sends data to the platform.

- Point the TR06 at the Plaspy server endpoint so location data is delivered to Plaspy.
- Configure the device APN and enable GPRS so the tracker can use mobile data for reporting.
- Set a suitable reporting interval so the device updates position and status at the required frequency.
- Validate connectivity and confirm the device appears in Plaspy once reporting is active.
- Use the provided verification command to check current GPRS and server parameters on the device.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol when data arrives

These exact public settings are used to direct TR06 traffic to Plaspy. All devices on Plaspy use the same port and Plaspy will detect the protocol automatically.

## Typical Requirements Before Setup

- A TR06 device with power connected and operational.
- A valid SIM card with GPRS data enabled and SMS capability for SMS based configuration.
- APN details from your mobile operator to configure GPRS access.
- Access to the TR06 SMS configuration method or the official Concox configuration tool.
- Administrative access to your Plaspy account so you can confirm the device appears after configuration.
- Basic familiarity with sending SMS commands to the tracker or using the manufacturer's configuration interface.

## How This Tracker Connects to Plaspy

The TR06 is configured to report location and device data to the shared Plaspy server endpoint and port so Plaspy can ingest telemetry and make it available in the platform. Once APN and server settings are correct, the device will open a GPRS session and send periodic reports to Plaspy.

- The tracker is set to use the Plaspy server domain or IP and port 8888 for data uploads.
- Plaspy accepts TCP or UDP transport so choose the transport the device supports or your network prefers.
- Plaspy automatically detects the tracker protocol when the device connects, simplifying device onboarding.
- Regular TIMER or heartbeat messages allow Plaspy to display live position and status updates.
- Verification commands can be used to confirm the device is configured to point at Plaspy before checking the platform.

## Common Configuration Workflow

1. Access the official Concox configuration method for TR06, typically SMS commands or the Concox setup tool.
2. Enter the Plaspy server endpoint either as the domain d.plaspy.com or the IP 54.85.159.138.
3. Set the server port to 8888 in the device configuration.
4. Choose UDP or TCP transport if the device requires an explicit transport selection.
5. Set APN and any required APN username or password for your mobile operator.
6. Apply or save the configuration and restart the device if required by the device or firmware.
7. Validate that the TR06 reports to Plaspy by checking the device status in your Plaspy account and using the device verification command.

## Example Configuration Commands

The TR06 supports SMS based configuration. Below are the public SMS commands in the order commonly used. Send these as SMS messages to the device SIM from an authorized phone number.

- Optional initial factory reset (use only if you need to clear existing settings):

```
FACTORY#
```

- Set time zone to UTC 0:

```
GMT,E,0#
```

- Set the operator APN (replace {{apn}} with your carrier APN, and include {{apnu}} and {{apnp}} if your carrier requires username and password):

```
APN,{{apn}},{{apnu}},{{apnp}}#
```

Note: keep the placeholders {{apn}}, {{apnu}}, {{apnp}} as applicable. If your APN requires only the APN name, send only APN,{{apn}}#.

- Set the GPRS server using the Plaspy domain (UDP or TCP selection is handled separately on some firmware):

```
SERVER,1,d.plaspy.com,8888,0#
```

- Alternatively set the GPRS server using the Plaspy IP:

```
SERVER,0,54.85.159.138,8888,0#
```

- Set the update interval to every 60 seconds (examples shown):

```
TIMER,60#
```

or

```
TIMER,60,60#
```

- Enable GPRS mode:

```
GPRSON,1#
```

- Verify current GPRS and server parameters:

```
GPRSSET#
```

Follow the order above for typical setup: APN, SERVER, TIMER, then enable GPRS. If you perform a factory reset first, reapply APN and server settings afterward.

## Configuration Notes

- Manufacturer firmware versions and local firmware customizations can change exact command formats or parameter order; always refer to the device's official manual if a command does not behave as expected.
- The TR06 supports SMS based setup as shown; if you prefer a configuration tool from Concox, use that official tool and apply the same Plaspy server settings.
- Choose UDP or TCP according to your network and device firmware options; Plaspy supports both and will detect the protocol automatically.
- All Plaspy supported devices use the same port so set port 8888 consistently when configuring multiple devices.
- Preserve APN placeholders and replace them with carrier credentials as needed; missing or incorrect APN values will prevent GPRS connectivity.

## Why Use Plaspy with This Configuration

Using the Concox TR06 with Plaspy provides a straightforward path to fleet visibility, operational monitoring, and event reporting. Pointing the TR06 at Plaspy with the public server settings and enabling GPRS allows position updates to be collected, displayed, and monitored in a single platform for improved operational oversight.

Learn more about Plaspy on the main website https://www.plaspy.com and verify device specific configuration methods, firmware behavior, and manufacturer details with Concox at https://www.iconcox.com/ to ensure you are working with the latest official documentation.
