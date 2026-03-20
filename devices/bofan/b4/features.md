---
slug: /bofan/b4/features
id: b4-features
sidebar_label: Features
title: Bofan - B4 Features
sidebar_class_name: menu_item_tracker
description: Compact 4G vehicle tracker features and Plaspy compatibility summary for fleet and personal use
keywords:
  - Bofan B4
  - Bofan B4 features
  - Bofan B4 GPS tracker
  - Bofan B4 Plaspy
  - Bofan GPS tracker
  - vehicle tracker B4
  - 4G GPS tracker Bofan
  - geo fence alert
  - remote engine cut
  - fleet tracking Plaspy
---

# Bofan - B4 Features

This page describes the public feature context for the Bofan B4 GPS vehicle tracker when used with Plaspy. It summarizes the model's practical capabilities and explains how those capabilities are reflected in the Plaspy platform to help fleet managers and individual owners understand what to expect from the device in everyday tracking and monitoring scenarios.

Exact feature availability, behavior, and configuration options can vary by firmware version, hardware revision, installation method, network conditions, and manufacturer implementation. For device specific instructions and the most current technical details consult the official Bofan documentation and release notes.

## Feature Overview

The Bofan B4 is a basic 4G vehicle tracker designed to provide reliable location reporting and simple remote control capabilities for vehicle monitoring. It focuses on core telematics functions that help with location awareness, perimeter alerts, remote intervention, and reduced reporting when the vehicle is static to save data.

- 4G connectivity for timely location updates and live tracking.
- Geo fence alert that notifies when a vehicle enters or leaves a defined area.
- Remote engine cut capability to stop the vehicle remotely in theft or emergency scenarios.
- Engine on working time monitoring to track engine runtime for usage insight.
- Reduced reporting in car static mode to save GPRS data costs.
- Dual reporting options including SMS tracking and live GPRS tracking.

## Core Features of Bofan - B4

- 4G cellular connectivity for live position reporting and remote commands.
- Geo-fence alerting to trigger notifications on boundary entry or exit.
- Remote engine cut output for stopping the engine via a control output.
- Engine working time monitoring to record when the vehicle engine is on.
- Static mode suppression of GPRS reports to reduce data use while parked.
- Support for tracking via SMS as a fallback reporting method.
- Internal GSM and GPS antennas for integrated installation.
- One ACC input and one configurable output for basic vehicle integration.

## How These Features Work with Plaspy

Plaspy presents B4 data as location points, alerts, and device state so teams can monitor vehicle movement and take action from the platform. Plaspy automatically detects supported tracker protocols and accepts device connections on the standard Plaspy input port, allowing devices that report via GPRS or SMS to appear in the platform without manual protocol selection.

- Live location and movement history are displayed in Plaspy as position updates from the B4 when using GPRS live tracking.
- Geo-fence events from the B4 surface as alerts in Plaspy so operators can receive notifications and review incidents on the map.
- Remote engine cut is represented in Plaspy as a remote command to the device output, enabling coordinated response workflows from the platform.
- Engine on working time reported by the device can be used in Plaspy reports to understand runtime and utilization.
- When the device uses static mode suppression of reports, Plaspy will show reduced update frequency while the vehicle is stationary, helping to control data costs.
- Plaspy detects the tracker protocol automatically and supports device connections via UDP or TCP to the platform domain, enabling straightforward setup.

## Typical Use Cases

- Fleet location tracking for route oversight and dispatch coordination.
- Perimeter monitoring using geo-fence alerts for depot or route compliance.
- Theft response workflows that use remote engine cut to assist recovery.
- Vehicle utilization analysis using engine on working time for duty tracking.
- Cost conscious tracking where static mode reduces cellular data usage.
- Backup SMS reporting for areas with intermittent GPRS coverage.

## Feature Availability Notes

- Manufacturer firmware versions and hardware revisions can add or change behavior; check the device firmware release notes for exact capabilities.
- Some features depend on how the device is wired during installation, for example ACC input usage and the engine cut output connection.
- SMS tracking availability depends on SIM plan and cellular network support in your region.
- Regional variants or aftermarket modifications may affect which features are available on a specific unit.
- For authoritative device configuration, consult the official Bofan documentation and the device configuration guides.

## Why Use Plaspy with These Features

Using the Bofan B4 with Plaspy provides a practical combination of a cost conscious 4G tracker and a platform designed for visibility and operational oversight. Plaspy collects location updates, alerts, and device state so teams can monitor vehicle movement, receive geo-fence notifications, and issue remote commands from a single interface. The platform's automatic protocol detection and unified device handling simplify bringing B4 units online and maintaining consistent monitoring across a mixed fleet.

To learn more about Plaspy and how it can be used with the Bofan B4, visit https://www.plaspy.com. For the latest device specific feature details, firmware notes, and manufacturer guidance verify current information on the official Bofan site https://www.bofancloud.com/.
