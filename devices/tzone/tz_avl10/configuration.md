---
slug: /tzone/tz_avl10/configuration
id: tz_avl10-configuration
sidebar_label: Configuration
title: TZone - TZ-AVL10 Configuration
sidebar_class_name: menu_item_tracker
description: Configure the TZone TZ-AVL10 for use with Plaspy using public SMS and GPRS settings and server details for fast integration
keywords:
  - TZone TZ-AVL10 configuration
  - TZ-AVL10 setup
  - TZone GPS tracker Plaspy
  - TZ-AVL10 server configuration
  - TZ-AVL10 SMS setup
  - TZ-AVL10 GPRS configuration
  - Plaspy device setup
  - TZone vehicle tracking setup
  - TZ-AVL10 tracking software configuration
  - TZone GPS platform setup
---

# TZone - TZ-AVL10 Configuration

This page covers the public configuration context for using the TZone TZ-AVL10 GPS tracker with the Plaspy platform. It collects the practical, public-facing settings and example SMS commands needed to point a TZ-AVL10 device at Plaspy so the unit can report location and basic events to your Plaspy account.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, but exact manufacturer-side setup steps can vary by firmware, hardware revision, installation type, and vendor configuration tools. The TZ-AVL10 supports GPRS TCP or UDP and SMS configuration; this page includes the public SMS command examples used to set APN, reporting interval, server address and port, and to enable GPRS mode.

## Configuration Overview

The goal of this configuration process is to prepare the TZ-AVL10 so it reliably communicates with Plaspy and becomes visible in your fleet monitoring environment. Using the public SMS commands provided by the manufacturer, you set the mobile operator APN, reporting timing, and the Plaspy server endpoint, then enable the tracker to use GPRS to send data.

- Set the operator APN so the device can establish GPRS data with the cellular provider using placeholders when needed
- Configure the upload interval so the tracker reports updates at the required frequency
- Point the device to the Plaspy server endpoint and port so data reaches Plaspy
- Activate GPRS mode so the tracker transmits over mobile data rather than only SMS
- Validate connectivity so the device is visible and reporting in the Plaspy platform

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol and uses the same port for all supported devices

## Typical Requirements Before Setup

- Ensure the tracker has power and a charged internal battery or external supply as required for initial configuration
- A working SIM card with an active data plan and GPRS enabled for the target network
- Knowledge of the mobile operator APN and, if required, APN username and password
- Access to the TZ-AVL10 SMS configuration method or the official TZone configuration tool from the vendor
- A phone capable of sending SMS messages to the device for applying the commands
- Confirmation of the device SMS password if it differs from the public example shown in the commands

## How This Tracker Connects to Plaspy

When configured for Plaspy, the TZ-AVL10 uses GPRS to open a data session with the platform and sends location and event data to the shared Plaspy server endpoint and port. Plaspy receives these uplinks and automatically identifies the tracker protocol so the device can appear in the platform without additional per device protocol selection.

- The device is configured to report to the Plaspy server domain or IP at the shared port
- Data is sent over GPRS using either UDP or TCP depending on your selection
- Plaspy detects the incoming tracker protocol automatically and processes location updates
- The tracker can send periodic location updates and event driven messages once GPRS is active
- Platform visibility is validated when the device first appears in Plaspy after successful configuration

## Common Configuration Workflow

1. Access the official TZone manufacturer configuration method or SMS commands documentation supplied with the TZ-AVL10
2. Enter the Plaspy server hostname d.plaspy.com or the Plaspy server IP 54.85.159.138 in the device server settings
3. Set the port to 8888 which Plaspy uses for all supported devices
4. Choose UDP or TCP transport if the device requires a transport selection for GPRS
5. Apply or save the configuration using the TZone SMS commands or the manufacturer tool
6. Restart the device if required by the tracker firmware or after saving settings
7. Validate the device reports to Plaspy by checking device visibility and initial telemetry in your Plaspy account

## Example Configuration Commands

To set the TZ-AVL10 using public SMS commands, send the following messages from a phone to the tracker. These commands are the publicly published pattern for the device. The example uses the SMS password shown in the public example (*000000); if your device uses a different SMS password, replace *000000 with your device password.

1. Set the operator APN. Use {{apn}} and optional {{apnu}} and {{apnp}} placeholders for APN username and password when needed. Example format:

```
*000000,011,{{apn}}{{# if apnu or apnp }},{{apnu}},{{apnp}}{{# end }}#
```

(Replace the placeholder values with your operator APN. If username or password are not required, omit those fields.)

2. Set the update interval to 60 seconds:

```
*000000,018,60,999#
```

3. Set the GPRS server to the Plaspy IP and port. You can use the IP or the hostname as allowed by the device:

```
*000000,015,0,54.85.159.138,8888#
```

4. Activate GPRS mode to enable data reporting:

```
*000000,016,1#
```

Notes on the commands above:
- Keep the command order when following the manufacturer example: APN first, reporting parameters next, server address, then enable GPRS.
- Placeholders such as {{apn}}, {{apnu}}, and {{apnp}} should be replaced with your operator values. If your APN does not require username or password, those fields can be omitted as shown in the public pattern.
- If you prefer to use the hostname rather than IP for the server, set d.plaspy.com where the device accepts hostnames in the server command.

## Configuration Notes

- Firmware versions and hardware revisions can change command formats or required parameters; always verify the exact command syntax for your device firmware.
- SMS based setup is supported by the TZ-AVL10 public examples, which is useful for field installations without direct access to a configuration tool.
- Choose UDP or TCP based on your network reliability and provider behavior; Plaspy accepts both on the shared port.
- Use the public server values d.plaspy.com or 54.85.159.138 and port 8888 as the target for all devices managed by Plaspy.
- Installer practices may vary by market and vendor bundled software so confirm any vendor specific wrappers or tools before mass deployment.

## Why Use Plaspy with This Configuration

Using the TZ-AVL10 with Plaspy provides a straightforward path to bring GPS and event reporting into a single fleet visibility platform. The public SMS commands allow installers to quickly provision APN, reporting intervals, and the Plaspy server endpoint so devices begin reporting with minimal onsite configuration. Plaspy's automatic protocol detection reduces the need for per device protocol selection and simplifies multi device deployments.

To learn more about Plaspy and how it can manage devices like the TZ-AVL10 visit https://www.plaspy.com. For the most current device specific setup details, firmware notes, and official command documentation verify information with the manufacturer at http://www.tzonedigital.com/ as vendor specifications and firmware behavior can change over time.
