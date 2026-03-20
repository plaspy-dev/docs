---
slug: /gotop/vt_350/configuration
id: vt_350-configuration
sidebar_label: Configuration
title: GOTOP - VT-350 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for GOTOP VT 350 showing Plaspy server settings and practical setup steps for OBD II vehicle tracking
keywords:
  - GOTOP VT-350 configuration
  - GOTOP VT-350 setup
  - VT-350 server configuration
  - VT-350 Plaspy setup
  - GOTOP GPS tracker configuration
  - OBD II tracker setup
  - vehicle tracking configuration
  - GPS tracker Plaspy compatibility
  - fleet management tracker setup
  - VT 350 tracking platform setup
---

# GOTOP - VT-350 Configuration

This page covers the public configuration context for using the GOTOP VT-350 OBD GPS tracker with Plaspy. It explains the shared server settings and the practical steps required to point the VT-350 to the Plaspy platform so the device can report location and status. The VT-350 is an OBD II plug in tracker with built in GSM and GPS antennas that supports location reporting by SMS and GPRS and can report latitude longitude speed direction and odometer data when configured.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol at the server side. Manufacturer side setup steps for the VT-350 can vary by firmware revision hardware revision installation type and the vendor configuration tool used. Use this guide to understand the Plaspy side settings and the typical workflow; always verify device specific menus and SMS commands with GOTOP documentation or vendor tools.

## Configuration Overview

Preparing a VT-350 for Plaspy means configuring its network reporting destination and verifying that it can send GPS and event data over GSM GPRS. The goal is to ensure the tracker reports reliably to the Plaspy endpoint so the device appears in your Plaspy account and provides the expected tracking and alerting functions.

- Set the VT-350 reporting server to Plaspy using the provided domain or IP so data goes to the correct endpoint.
- Choose the transport option supported by your device firmware either UDP or TCP and set the device to use port 8888.
- Confirm GPRS connectivity and APN settings where applicable so the tracker can open a data session to Plaspy.
- Validate that the device sends position and event messages and that Plaspy automatically recognizes the tracker protocol.
- Test tracking on command and periodic reporting to confirm visibility in Plaspy.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol when the device connects

These exact values are used by Plaspy for all supported devices. Plaspy uses the same port for all devices and performs automatic protocol detection so you typically only need to point the tracker to d.plaspy.com or the IP above and select the transport if required by the device.

## Typical Requirements Before Setup

- Confirm the VT-350 is inserted into a compatible vehicle OBD II port and receives vehicle power.
- Ensure a valid SIM card with data allowance and correct APN settings for GPRS is installed if using data reporting.
- Have access to the GOTOP configuration method for your unit such as SMS commands manufacturer software or a dealer configuration tool.
- Verify that the tracker firmware is appropriate for remote configuration and that you can change server domain IP and transport settings.
- Keep the vehicle stationary and with a clear view of the sky during initial GPS fix and first connection tests.

## How This Tracker Connects to Plaspy

When configured for Plaspy the VT-350 establishes a GPRS data session and sends its reporting messages to the Plaspy server endpoint where the platform will detect and decode the device protocol. This enables real time location updates alerts and basic telematics to be visible in the Plaspy platform once the device is correctly registered on the account side.

- The device is pointed to d.plaspy.com or 54.85.159.138 so messages arrive at the Plaspy server.
- Transport is set to UDP or TCP as required; both are supported and the device should use port 8888.
- Plaspy automatically detects the tracker protocol so no separate protocol selection is required on the server side.
- Tracker messages include location and event reports which Plaspy parses for platform visibility.
- After successful configuration the device will report on command or at the configured time interval and appear in Plaspy for monitoring.

## Common Configuration Workflow

1. Access the official GOTOP configuration method for your VT-350 such as SMS commands the vendor configuration utility or dealer software.
2. Enter d.plaspy.com or enter the server IP 54.85.159.138 in the device server setting field according to the manufacturer tool.
3. Set the device port to 8888 which is the Plaspy port used for all devices.
4. If the tracker requires a transport selection choose UDP or TCP based on your deployment or firmware option.
5. Configure any required APN or GPRS options so the VT-350 can open a data connection to the internet.
6. Apply or save the configuration and restart the device if the device workflow requires a reboot.
7. Validate that the VT-350 reports to Plaspy by checking for the first position or by using a tracking on command and confirming visibility in Plaspy.

## Example Configuration Commands

No public vendor commands for the VT-350 are included in this guide. Exact configuration commands and SMS formats for GOTOP VT-350 devices vary by firmware and the manufacturer tool used. In general when using SMS or a configuration tool you will set the Plaspy destination as follows in the maker provided fields:

- Server domain or IP set to d.plaspy.com or 54.85.159.138
- Port set to 8888
- Transport set to UDP or TCP if the device requires a selection

If you obtain official SMS command syntax from GOTOP or your vendor follow their order and formatting exactly. Plaspy will automatically detect the tracker protocol once the device connects to the configured server and port.

## Configuration Notes

- Firmware differences and hardware revisions can change the menu layout SMS command formats and whether the device requires IP or domain entry; consult GOTOP documentation for exact commands.
- Choose UDP or TCP based on the device option and network environment; both transports are supported by Plaspy on port 8888 but behavior can differ with mobile networks.
- If you use SMS based setup for initial configuration keep the phone number and SMS command format from GOTOP handy; SMS configuration is often used when a configuration utility is not available.
- Verify APN settings with the SIM provider and update them in the device before testing GPRS reporting to Plaspy.
- Always test the device in a controlled environment to confirm it registers with Plaspy and provides the expected GPS and alert data.

## Why Use Plaspy with This Configuration

Using the GOTOP VT-350 with Plaspy provides a practical way to gain visibility into vehicle location movement and basic telematics by leveraging the tracker’s OBD II form factor and GSM GPRS reporting. Pointing the VT-350 to Plaspy at d.plaspy.com or 54.85.159.138 on port 8888 lets the platform automatically detect the device protocol and show position and event data in your fleet view.

To learn more about Plaspy and platform capabilities visit https://www.plaspy.com. For the latest device specific commands firmware notes and manufacturer instructions verify the VT-350 documentation at https://www.gotop.cc/.
