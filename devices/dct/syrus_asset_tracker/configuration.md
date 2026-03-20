---
slug: /dct/syrus_asset_tracker/configuration
id: syrus_asset_tracker-configuration
sidebar_label: Configuration
title: DCT - Syrus Asset Tracker Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guidance for the DCT Syrus Asset Tracker and Plaspy server integration
keywords:
  - DCT Syrus Asset Tracker configuration
  - Syrus Asset Tracker Plaspy setup
  - Syrus Asset Tracker server configuration
  - GPS tracker Plaspy integration
  - asset tracker setup guide
  - Syrus Desk tmf script
  - Plaspy device configuration
  - long term asset monitoring
  - motion alert tracker configuration
  - 4G Syrus asset tracker setup
---

# DCT - Syrus Asset Tracker Configuration

This page covers the public configuration context for using the DCT Syrus Asset Tracker with Plaspy. It explains the shared Plaspy server settings you must apply on the tracker and shows example Syrus SB script commands that are commonly used to provision the device for reporting to Plaspy. The content here is intended to help technical users prepare a Syrus Asset Tracker for connectivity and visibility in Plaspy while remaining aligned with public manufacturer guidance.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, but exact manufacturer-side setup steps can vary by firmware version, hardware revision, installation type, and the vendor tools you use. Where available, this page includes a Syrus Desk compatible script example and practical deployment guidance to get the device reporting to Plaspy quickly.

## Configuration Overview

This section explains the practical purpose of the configuration process and what you will achieve by applying the settings described here. The primary goal is to prepare the Syrus Asset Tracker so it can reliably send position and event data to Plaspy for mapping, alerting, and historical reporting.

- Point the device to Plaspy server endpoint so telemetry is routed into your Plaspy account.
- Configure APN placeholders so the tracker has an active cellular data connection.
- Enable or load reporting rules and event definitions so motion and time based reports are generated.
- Save and apply the configuration so the device begins transmitting to Plaspy on the shared port.
- Validate the device appears in Plaspy and sends position updates and event reports.

## Plaspy Server Settings

When configuring the Syrus Asset Tracker for Plaspy, use the following public server settings exactly as shown:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol

Note that Plaspy uses the same port for all supported devices and that the platform will detect the appropriate protocol once the device connects.

## Typical Requirements Before Setup

- A powered and reachable Syrus Asset Tracker unit with appropriate battery or temporary power applied for configuration.
- Access to the official DCT configuration tools or software such as Syrus Desk to load scripts or provisioning files.
- A valid cellular data plan and SIM card configured for the device where applicable.
- The correct APN settings for the cellular network you are using (placeholders are shown in example commands).
- Access to Plaspy account information to confirm visibility after the device connects.
- A test area or deployment procedure to validate position and event reporting after configuration.

## How This Tracker Connects to Plaspy

The Syrus Asset Tracker sends GPS positions and event reports over the cellular network to the Plaspy server endpoint and port. Once the server settings are applied, Plaspy receives and interprets the device protocol automatically so the tracker becomes visible in the platform without per-device server values.

- The tracker reports time and distance or event-driven telemetry to the Plaspy endpoint at d.plaspy.com on port 8888.
- Motion and input events are defined on the device and transmitted to Plaspy for alerting and mapping.
- APN and network settings allow the device to establish an IP session that sends UDP or TCP packets to Plaspy.
- Plaspy detects the tracker protocol and ingests messages so operators can monitor location and alarms.
- After configuration the device should appear in Plaspy and begin sending position updates per the loaded reporting rules.

## Common Configuration Workflow

1. Access the official manufacturer configuration method or software such as Syrus Desk.
2. Prepare or create a new configuration script or template file (Syrus Desk supports .tmf files).
3. Enter the Plaspy server address by using d.plaspy.com or 54.85.159.138 as the remote server destination.
4. Set the port to 8888 and choose UDP or TCP if the device requires a transport selection.
5. Configure the APN placeholders and any authentication fields your network requires and apply or save the configuration.
6. Restart or reboot the device if required by the manufacture tool to apply the new settings.
7. Validate that the device reports to Plaspy by checking the device list and recent telemetry in your Plaspy account.

If you use the Syrus Desk workflow, you can save a .tmf script and load it directly into the tool to provision multiple units consistently.

## Example Configuration Commands

You can copy and paste this script to a new empty text file, save it with a .tmf extension, and load it with Syrus Desk. The commands below are the public example Syrus SB script provided for initial configuration. Placeholders are preserved where applicable.

Full script (preserve order when loading):

```
#Syrus SB script
#Getting Started example
#Delete any previous configuration
>SRT;CONFIG<
>SXADP**U<
#configuring the APN
>SRFA{{apn}}<
>SRFI<
>SRFL{{apnu}}<
>SRFP{{apnp}}<
#The remote AVL server address and port
>SXADP0000d.plaspy.com;8888<
#A Destination Address holding the server destination
>SDA4;P00<
#Time-only Time And Distance signal definition
>STD80300<
#Event triggered by T&D signal
>SED37NV4;TD8+<
#Input report event
>SED05NV4;IP3+<
#end
```

Key command excerpts and brief explanations:

- Delete previous configuration (use when starting from a clean state or when re-provisioning):
```
>SRT;CONFIG<
>SXADP**U<
```

- Set APN values (placeholders must be replaced with your network APN and optional username/password):
```
>SRFA{{apn}}<
>SRFL{{apnu}}<
>SRFP{{apnp}}<
```
Explanation: {{apn}} is the mobile network APN. {{apnu}} and {{apnp}} are optional APN username and password placeholders if required by your carrier.

- Point the device to Plaspy server and port:
```
>SXADP0000d.plaspy.com;8888<
```
This command sets the remote AVL server address to d.plaspy.com and the port to 8888.

- Create a destination address block for the server:
```
>SDA4;P00<
```

- Define a time and distance reporting rule and associated events:
```
>STD80300<
>SED37NV4;TD8+<
>SED05NV4;IP3+<
```
These entries configure a time-only time and distance signal and set events for the T&D signal and an input report event. Do not modify these unless you understand Syrus SB syntax for event definitions.

If you are unsure about any command or placeholder, consult the official Syrus Desk documentation or DCT technical support before applying scripts to production devices.

## Configuration Notes

- Firmware and hardware revisions may change available SB commands and their syntax; always confirm command compatibility with the device firmware version you are running.
- Use Syrus Desk or the official DCT provisioning tool to load .tmf scripts for batch configuration and consistent deployment.
- Choose UDP or TCP based on installer preference and network characteristics; Plaspy accepts either transport on port 8888 and will detect the protocol automatically.
- Replace APN placeholders {{apn}}, {{apnu}}, and {{apnp}} with the correct values for your cellular carrier before loading the script.
- The "delete previous configuration" commands are useful for fresh deployments or re-provisioning but are optional if you are updating an existing configuration.

## Why Use Plaspy with This Configuration

Using the DCT Syrus Asset Tracker with Plaspy provides organizations dependable long-term monitoring for non-powered and exposed assets. With the shared Plaspy server settings and automatic protocol detection, provisioning the tracker to report location and motion events is straightforward and repeatable across many units, enabling efficient fleet and asset operations.

Learn more about Plaspy and how it supports asset tracking workflows at https://www.plaspy.com. For the latest device specific configuration methods, firmware behavior, and manufacturer documentation verify details on the DCT website at https://www.digitalcomtech.com/ before deploying to production.
