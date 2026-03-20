---
slug: /autofon/se_maiak/features
id: se_maiak-features
sidebar_label: Features
title: AutoFon - SE+ Маяк Features
sidebar_class_name: menu_item_tracker
description: Public feature summary for AutoFon SE+ Маяк and how it works with Plaspy for location and event monitoring
keywords:
  - AutoFon SE+ Маяк features
  - AutoFon SE+ Маяк GPS tracker
  - AutoFon SE+ Маяk Plaspy
  - AutoFon GPS tracker features
  - SE+ Маяк functions
  - SE+ Маяк capabilities
  - AutoFon tracking device
  - AutoFon Маяк features Plaspy
  - vehicle tracking AutoFon SE+
  - asset tracking AutoFon SE+
---

# AutoFon - SE+ Маяк Features

This page describes the public feature context for the AutoFon SE+ Маяк tracker and how those features are used with Plaspy. It focuses on practical, non sensitive descriptions of what the device does, how it reports location and events, and what Plaspy displays when the tracker is connected to a monitoring service.

Exact feature availability and behavior can vary by firmware version, hardware revision, installation method, and manufacturer implementation. The information below is grounded in the device description provided by the manufacturer and is intended as general guidance; users should confirm device specifics against manufacturer documentation and current firmware notes.

## Feature Overview

The AutoFon SE+ Маяк is a compact GPS tracker that reports location and event data over GSM networks using SMS and GPRS. It is built for discreet installation across vehicles, mobile assets, and stationary objects, and includes several sensors and channels to detect and report movement and special events.

- Combined GLONASS and GPS navigation for improved location accuracy and faster fixes.
- Location reporting via SMS or GPRS to a monitoring system, enabling live tracking and periodic updates.
- Motion and impact detection with adjustable sensitivity and configurable reactivation intervals.
- Built in microphone for remote audio listening where permitted by law.
- On device black box storage capable of retaining a large backlog of GPRS packets for later transmission.
- Support for remote firmware updates over GPRS to apply manufacturer revisions without physical access.

## Core Features of AutoFon - SE+ Маяк

- GLONASS plus GPS navigation module for enhanced positional accuracy.
- Dual reporting modes via SMS and GPRS to send coordinates and event messages.
- Movement, impact, and accident detection with sensitivity and interval adjustments.
- Built in microphone to listen to the installation environment when the device supports that function.
- Built in SOS micro button for manually triggered emergency signaling.
- Digital accelerometer based movement detection and SMS event notifications with coordinates.
- Universal additional channel for remote control of external devices as supported by the manufacturer.
- Onboard black box storing up to 98,000 GPRS packets for offline buffering and later upload.

## How These Features Work with Plaspy

Plaspy can ingest and present the location and event data that the SE+ Маяк sends, helping organizations maintain situational awareness and historical records. Integration focuses on visibility of position, event timestamps, and device connectivity rather than replacing manufacturer management tools.

- Location updates sent by the tracker via GPRS or SMS are displayed on Plaspy maps and history views for tracking and route reconstruction.
- Movement, impact, and SOS events reported by the device appear as timeline events and can be used to trigger notifications or operator review.
- Buffered black box data transmitted after reconnection can be reflected in history so missed periods are visible once the device uploads stored packets.
- Microphone activation and related event indicators are shown as device-reported audio events when the tracker signals those actions.
- Plaspy presents device connectivity and reporting status, helping operators see when a unit is online, offline, or transmitting buffered data.

## Typical Use Cases

- Vehicle and motorcycle tracking for route monitoring and location history.
- Asset protection for cargo, trailers, and portable high value equipment.
- Monitoring of stationary remote objects such as garages, cottages, and retail pavilions.
- Personal or pet location tracking where a compact tracker is appropriate and local laws permit.
- Post event reconstruction using buffered black box data after temporary connectivity loss.
- Emergency alerting via the SOS button to notify owners or monitoring staff.

## Feature Availability Notes

- Firmware versions and hardware revisions can enable or change behaviour of sensors, reporting intervals, and supported commands.
- Manufacturer configuration, regional variants, and installation wiring can affect which features are available in a deployed unit.
- Some functions such as remote listening or remote control of external circuits may be restricted by local regulation or by how the device is configured by the installer.
- Black box capacity, SMS formatting, and the exact structure of event messages depend on device firmware and manufacturer settings.
- Always consult the official AutoFon documentation for exact parameter lists, supported commands, and firmware change logs.

## Why Use Plaspy with These Features

Using the AutoFon SE+ Маяк with Plaspy provides a centralized, searchable record of location and event data reported by the tracker. Plaspy helps teams visualize movements, receive event alerts, and keep historical logs that include buffered transmissions after connectivity gaps. For operations that rely on timely situational awareness, combining the SE+ Маяк hardware with Plaspy monitoring simplifies oversight and day to day management.

Learn more about how Plaspy can present and manage data from compatible trackers at https://www.plaspy.com. For the most current device specifications, supported commands, firmware notes, and manufacturer guidance please verify details on the official AutoFon site https://www.autofon.ru/.
