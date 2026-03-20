---
slug: /uvi_group/gt02/configuration
id: gt02-configuration
sidebar_label: Configuration
title: UVI Group - GT02 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide to set up UVI Group GT02 with Plaspy using shared server settings and SMS commands
keywords:
  - UVI Group GT02 configuration
  - UVI Group GT02 setup
  - GT02 server configuration
  - GT02 Plaspy setup
  - GT02 GPS tracker configuration
  - vehicle tracker configuration
  - GT02 SMS commands
  - GPRS tracker setup
  - GT02 APN configuration
  - GPS tracking platform configuration
---

# UVI Group - GT02 Configuration

This page covers the public configuration context for using the UVI Group GT02 tracker with Plaspy. It gathers the practical, public-facing steps and commands used to point a GT02 device at the Plaspy service so the device can report location and status via GPRS. Where available, SMS command examples and verification commands are shown to help with an on-device setup flow.

Plaspy uses shared server settings for all supported devices and automatically detects the tracker protocol. Exact manufacturer-side setup steps can vary by firmware, hardware revision, installation type, and vendor configuration tools. The GT02 supports GPRS and SMS configuration methods, and this guide uses those public commands as examples while recommending you confirm device-specific steps with the manufacturer documentation.

## Configuration Overview

Configuring the GT02 for Plaspy prepares the device to communicate over the cellular network and report GPS data to the Plaspy server endpoint on a single shared port. The process typically involves setting the device APN, server address and port, reporting interval, and optional timezone or factory reset steps. Example SMS commands from the device documentation are included below.

- Point the tracker to the Plaspy server endpoint and port so data reaches the platform.
- Configure the SIM APN and any operator credentials required for GPRS data.
- Set update/reporting intervals so the device sends positional updates at the desired rate.
- Validate connectivity and device status using verification SMS commands.
- Optionally perform an initial factory reset or timezone adjustment where needed.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol and uses the same port for all supported devices

## Typical Requirements Before Setup

- A powered GT02 device with working SIM card and active data plan supporting GPRS
- Access to the device SMS command interface or the manufacturer's configuration tool
- Knowledge of the device password or administration code (the GT02 documentation shows 666666 as the default password in public examples)
- Correct APN information from the mobile operator to enable GPRS connectivity
- A method to receive device confirmation messages (phone for SMS or other monitoring) after configuration
- Optional: manufacturer wiring or installation accessories if the device will be hardwired into a vehicle

## How This Tracker Connects to Plaspy

The GT02 uses its GSM/GPRS connection to send GPS positions and device status messages to the shared Plaspy server endpoint and port. Once configured with the correct APN and server settings, the tracker will establish a TCP or UDP session (as configured) and transmit location data so the device becomes visible in Plaspy.

- The tracker is configured to report to the Plaspy server endpoint at d.plaspy.com or 54.85.159.138
- The device communicates on port 8888 which Plaspy uses for all supported devices
- Data is sent over GPRS using TCP or UDP depending on device selection
- Plaspy automatically detects the tracker protocol when the device connects
- Verification commands can confirm that the server and APN settings were applied

## Common Configuration Workflow

1. Access the official UVI Group GT02 configuration method, typically SMS commands or the manufacturer's configuration tool as documented by UVI Group.
2. Configure the device APN using the operator settings so GPRS data is available.
3. Enter the Plaspy server address using either d.plaspy.com or the IP 54.85.159.138.
4. Set the server port to 8888 and choose UDP or TCP if the device requires a transport selection.
5. Apply or save the configuration on the device and wait for confirmation messages.
6. Restart or power cycle the tracker if the manufacturer instructions recommend a reboot to apply network settings.
7. Validate that the device reports to Plaspy and appears in the platform monitoring interface.

## Example Configuration Commands

The GT02 manufacturer documentation provides a set of SMS commands for public configuration. These examples use the default device password shown in the public documentation, 666666. Preserve any placeholders such as [apn], [apnu], and [apnp] and replace them with your operator APN, user, and password as required.

- Optional initial factory reset (use only if you intend to restore factory settings):
```text
FACTORY,666666#
```

- Set the time zone to UTC+0:
```text
gmt,666666,e,0#
```

- Set the operator APN (replace [apn] and optionally [apnu] and [apnp]):
```text
APN,666666,[apn],[apnu],[apnp]#
```
Note: Keep placeholders [apn], [apnu], and [apnp] and replace them with your carrier APN, username, and password when required. If no username or password are needed, omit those placeholders according to the device syntax.

- Configure the GPRS server to point to Plaspy by IP and port (public example uses the Plaspy IP and port):
```text
server,666666,0,54.85.159.138,8888,0#
```
Note: This server command in public documentation uses the Plaspy IP 54.85.159.138 and port 8888. You can also configure domain values if the device supports them, for example d.plaspy.com, but follow the device command syntax.

- Set the location update interval to 60 seconds:
```text
timer,666666,,60#
```

- Verify current GPRS settings:
```text
GPRSSET,666666#
```

- Check device status:
```text
status,666666#
```

Follow the command order when performing an initial setup as shown above if you want to perform a factory reset first, then apply timezone, APN, server, and timer settings. The exact SMS syntax must match the device firmware expectations.

## Configuration Notes

- SMS based configuration is supported in the public GT02 documentation; if you use SMS commands, ensure your sending phone can reach the device and that the SIM has SMS capability.
- Firmware and hardware revisions can change available command syntax or parameter order; always verify the exact SMS formatting in the device's current manual.
- You may choose UDP or TCP for the transport. The GT02 documentation shows server configuration with numeric parameters; follow manufacturer guidance for transport selection.
- Plaspy uses the same port 8888 for all supported devices and automatically detects the tracker protocol on connect.
- Fill the APN placeholders with your carrier APN details. If your carrier requires an APN username or password, provide [apnu] and [apnp] as shown in the APN command.

## Why Use Plaspy with This Configuration

Using the GT02 configured to report to Plaspy gives fleet managers and vehicle owners a simple path to continuous visibility and operational monitoring. With the device sending GPS data over GPRS to the Plaspy server, organizations can centralize tracking data, monitor vehicle movement, and receive status updates in a single platform.

To learn more about Plaspy and how it works with devices like the GT02, visit https://www.plaspy.com. For the most current device specific configuration methods, firmware behavior, and manufacturer details verify information on the UVI Group website at http://www.uvi-group.com/
